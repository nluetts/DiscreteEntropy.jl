var documenterSearchIndex = {"docs":
[{"location":"#DiscreteEntropy","page":"Home","title":"DiscreteEntropy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package for the estimation of Shannon entropy of discrete distributions.","category":"page"},{"location":"#Multiplicities","page":"Home","title":"Multiplicities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DiscreteEntropy uses the multiplicities representation of data. Given a histogram of samples","category":"page"},{"location":"#Frequentist-Estimators","page":"Home","title":"Frequentist Estimators","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"maximum_likelihood\nmiller_madow\ngrassberger\nschurmann\nschurmann_generalised\nzhang\nchao_shen\nbonachela","category":"page"},{"location":"#DiscreteEntropy.maximum_likelihood","page":"Home","title":"DiscreteEntropy.maximum_likelihood","text":"maximum_likelihood(data::CountData)::Float64\n\nReturns the maximum likelihood estimation of Shannon entropy.\n\nhatH_ML = log(n) - frac1n sum_k=1^Kh_k log(h_k)\n\nwhere n is the number of samples\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.miller_madow","page":"Home","title":"DiscreteEntropy.miller_madow","text":"miller_madow(data::CountData)::Float64\n\nReturns the maximum likelihood estimation of Shannon entropy, with a positive offset based on the total number of samples seen (n) and the support size (K).\n\nhatH_MM = hatH_ML + fracK - 12n\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.grassberger","page":"Home","title":"DiscreteEntropy.grassberger","text":"grassberger(data::CountData)::Float64\n\nReturns the Grassberger estimation of Shannon entropy.\n\nhatH_G = log(n) - frac1n sum_k=1^K h_k  G(h_k)\n\nThis is essentially the same as hatH_ML, but with the logarithm swapped for the scalar function G\n\nwhere\n\nG(h) = psi(h) + frac12(-1)^h big( psi(frach+12 - psi(frach2))\n\nThis is the solution to G(h) = psi(h) + (-1)^h int_0^1 fracx^h - 1x+1 dx as given in the paper\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.schurmann","page":"Home","title":"DiscreteEntropy.schurmann","text":"schurmann(data::CountData, ξ::Float64 = ℯ^(-1/2))::Float64\n\nschurmann\n\nhatH_SHU = psi(n) - frac1n sum_k=1^K  y_x big( psi(y_x) + (-1)^y_x _0^frac1xi - 1 fract^y_x-11+tdt big)\n\n\nThis is no one ideal value for xi, however the paper suggests e^(-12) approx 06\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.schurmann_generalised","page":"Home","title":"DiscreteEntropy.schurmann_generalised","text":"schurmann_generalised(data::CountData, xis::Vector{Float64})::Float64\n\nschurmann_generalised\n\nhatH_SHU = psi(n) - frac1n sum_k=1^K  y_x big( psi(y_x) + (-1)^y_x _0^frac1xi_x - 1 fract^y_x-11+tdt big)\n\n\nAccepts a vector is ξ values, rather than just one.\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.zhang","page":"Home","title":"DiscreteEntropy.zhang","text":"zhang(data::CountData)\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.bonachela","page":"Home","title":"DiscreteEntropy.bonachela","text":"bonachela(data::CountData)\n\n\n\n\n\n","category":"function"},{"location":"#Bayesian-Estimators","page":"Home","title":"Bayesian Estimators","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"bayes\nnsb\nansb\npym","category":"page"},{"location":"#DiscreteEntropy.bayes","page":"Home","title":"DiscreteEntropy.bayes","text":"bayes(α::Float64, data::CountData)::Float64\n\nReturns an estimate of Shannon entropy given data and a concentration parameter α.\n\nhatH_textBayes = - sum_k=1^K hatp_k^textBayes  log hatp_k^textBayes\n\nwhere\n\np_k^textBayes = frack + αn + A\n\nand\n\nA = sum_x=1^K α_x\n\nIn addition to setting your own α, we have the following suggested choices\n\njeffrey : α = 0.5\nlaplace: α = 1.0\nschurmann_grassberger: α = 1 / K\nminimax: α = √{n} / K\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.nsb","page":"Home","title":"DiscreteEntropy.nsb","text":"nsb(data; k=data.K)\n\nReturns the Bayesian estimate of Shannon entropy of data, using the Nemenman, Shafee, Bialek algorithm\n\nhatH^textNSB = frac int_0^ln(K) dxi  rho(xi textbfn) langle H^m rangle_beta (xi)  \n                             int_0^ln(K) dxi  rho(ximid n)\n\nwhere\n\nrho(xi mid textbfn) =\n    mathcalP(beta (xi)) frac Gamma(kappa(xi))Gamma(N + kappa(xi))\n    prod_i=1^K fracGamma(n_i + beta(xi))Gamma(beta(xi))\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.ansb","page":"Home","title":"DiscreteEntropy.ansb","text":"ansb(data::CountData; undersampled::Float64=0.1)::Float64\n\nhatH_ANSB = fracC_gammaln(2) - 1 + 2 ln(N) - psi_0(Delta)\n\nwhere C_gamma is Euler's Gamma Constant approx 057721, psi_0 is the digamma function and Delta the number of coincidences in the data.\n\nReturns the Asymptotic NSB estimator (equations 11 and 12)\n\nThis is designed for the extremely undersampled regime (K ~ N) and diverges with N when well-sampled. ANSB requires that NK  0, which we set to be NK  01 by default\n\n\n\n\n\n","category":"function"},{"location":"#Utilities","page":"Home","title":"Utilities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"xlogx\nto_bits\nto_bans","category":"page"},{"location":"#DiscreteEntropy.xlogx","page":"Home","title":"DiscreteEntropy.xlogx","text":"xlogx(x::Float64)\n\nReturns x * log(x) for x ≥ 0, or 0.0 if x is zero\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.to_bits","page":"Home","title":"DiscreteEntropy.to_bits","text":"to_bits(x::Float64)\n\nReturn frachlog(2) where h is in nats\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.to_bans","page":"Home","title":"DiscreteEntropy.to_bans","text":"to_bans(x::Float64)\n\nReturn frachlog(10) where h is in nats\n\n\n\n\n\n","category":"function"}]
}
