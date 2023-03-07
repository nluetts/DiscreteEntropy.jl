var documenterSearchIndex = {"docs":
[{"location":"#DiscreteEntropy","page":"Home","title":"DiscreteEntropy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package for the estimation of Shannon entropy of discrete distributions.","category":"page"},{"location":"#Multiplicities","page":"Home","title":"Multiplicities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DiscreteEntropy uses the multiplicities representation of data. Given a histogram of samples","category":"page"},{"location":"#Types","page":"Home","title":"Types","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"AbstractEstimator\nestimate_h","category":"page"},{"location":"#DiscreteEntropy.AbstractEstimator","page":"Home","title":"DiscreteEntropy.AbstractEstimator","text":"AbstractEstimator\n\nSupertype for NonParameterised and Parameterised entropy estimators.\n\n\n\n\n\n","category":"type"},{"location":"#DiscreteEntropy.estimate_h","page":"Home","title":"DiscreteEntropy.estimate_h","text":"estimate_h(data::CountData, estimator::Type{T}) where {T<:AbstractEstimator}\n\nReturn the estimate in nats of Shannon entropy of data using estimator.\n\n\n\n\n\n","category":"function"},{"location":"#Data","page":"Home","title":"Data","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"from_data\nfrom_samples\nfrom_counts\n\nEntropyData\nCountData","category":"page"},{"location":"#DiscreteEntropy.from_data","page":"Home","title":"DiscreteEntropy.from_data","text":"from_data(data::AbstractVector, ::Type{Samples})\nfrom_data(data::AbstractVector, ::Type{SampleHistogram})\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.from_samples","page":"Home","title":"DiscreteEntropy.from_samples","text":"from_samples\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.CountData","page":"Home","title":"DiscreteEntropy.CountData","text":"CountData\n\n\n\n\n\n","category":"type"},{"location":"#Frequentist-Estimators","page":"Home","title":"Frequentist Estimators","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"maximum_likelihood\njackknife_ml\nmiller_madow\ngrassberger\nschurmann\nschurmann_generalised\nzhang\nchao_shen\nbonachela","category":"page"},{"location":"#DiscreteEntropy.maximum_likelihood","page":"Home","title":"DiscreteEntropy.maximum_likelihood","text":"maximum_likelihood(data::CountData)::Float64\n\nCompute the maximum likelihood estimation of Shannon entropy of data in nats.\n\nhatH_ML = log(N) - frac1N sum_i=1^Kh_i log(h_i)\n\nExamples\n\n\njulia> data = from_data([1,2,3,2,1], Histogram)\nCountData([2.0 3.0 1.0; 2.0 1.0 2.0], 9.0, 6)\n\njulia> maximum_likelihood(data)\n1.522955067\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.miller_madow","page":"Home","title":"DiscreteEntropy.miller_madow","text":"miller_madow(data::CountData)\n\nReturns the maximum likelihood estimation of Shannon entropy, with a positive offset based on the total number of samples seen (N) and the support size (K).\n\nhatH_MM = hatH_ML + fracK - 12N\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.grassberger","page":"Home","title":"DiscreteEntropy.grassberger","text":"grassberger(data::CountData)\n\nReturns the Grassberger estimation of Shannon entropy.\n\nhatH_G = log(N) - frac1N sum_i=1^K h_i  G(h_i)\n\nThis is essentially the same as hatH_ML, but with the logarithm swapped for the scalar function G\n\nwhere\n\nG(h) = psi(h) + frac12(-1)^h big( psi(frach+12 - psi(frach2))\n\nThis is the solution to G(h) = psi(h) + (-1)^h int_0^1 fracx^h - 1x+1 dx as given in the paper\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.schurmann","page":"Home","title":"DiscreteEntropy.schurmann","text":"schurmann(data::CountData, ξ::Float64 = ℯ^(-1/2))\n\nschurmann\n\nhatH_SHU = psi(N) - frac1N sum_i=1^K  h_i big( psi(h_i) + (-1)^h_i _0^frac1xi - 1 fract^h_i-11+tdt big)\n\n\nThis is no one ideal value for xi, however the paper suggests e^(-12) approx 06\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.schurmann_generalised","page":"Home","title":"DiscreteEntropy.schurmann_generalised","text":"schurmann_generalised(data::CountVector, xis::XiVector{T}) where {T<:Real}\n\nschurmann_generalised\n\nhatH_SHU = psi(N) - frac1N sum_i=1^K  h_i big( psi(h_i) + (-1)^h_i _0^frac1xi_i - 1 fract^h_i-11+tdt big)\n\n\nComputes the generalised Schurmann entropy estimation, given a countvector data and a xivector xis, which must both be the same length.\n\nschurmann_generalised(data::CountVector, xis::Distribution, scalar=false)\n\nComputes the generalised Schurmann entropy estimation, given a countvector data and a distribution xis.\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.zhang","page":"Home","title":"DiscreteEntropy.zhang","text":"zhang(data::CountData)\n\nReturn the Zhang estimate of the Shannon entropy of data in nats.\n\nThe recommended definition of Zhang's estimator is from Grabchak et al.\n\nhatH_Z = sum_i=1^K hatp_i sum_v=1^N - h_i frac1v _j=0^v-1 left( 1 + frac1 - h_iN - 1 - j right)\n\nThe actual algorithm comes from Fast Calculation of entropy with Zhang's estimator by Lozano et al..\n\nLinks\n\nEntropy estimation in turing's perspective\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.chao_shen","page":"Home","title":"DiscreteEntropy.chao_shen","text":"chao_shen(data::CountData)\n\nReturn the Chao-Shen estimate of the Shannon entropy of data in nats.\n\nhatH_CS = - sum_i=i^K frachatp_i^CS log hatp_i^CS1 - (1 - hatp_i^CS)\n\nwhere\n\nhatp_i^CS = (1 - frac1 - hatp_i^MLN) hatp_i^ML\n\n\n\n\n\n","category":"function"},{"location":"#Bayesian-Estimators","page":"Home","title":"Bayesian Estimators","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"bayes\nnsb\nansb\npym","category":"page"},{"location":"#Resampling","page":"Home","title":"Resampling","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"We can also resample data","category":"page"},{"location":"","page":"Home","title":"Home","text":"jackknife","category":"page"},{"location":"#Divergence","page":"Home","title":"Divergence","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"kl_divergence\njeffreys_divergence\njensen_shannon_divergence\njensen_shannon_distance","category":"page"},{"location":"#Conditional-Entropy-and-Conditional-Mutual-Information","page":"Home","title":"Conditional Entropy and Conditional Mutual Information","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Conditional Entropy","category":"page"},{"location":"","page":"Home","title":"Home","text":"conditional_entropy","category":"page"},{"location":"#Utilities","page":"Home","title":"Utilities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"logx\nxlogx\nto_bits\nto_bans","category":"page"},{"location":"#DiscreteEntropy.to_bits","page":"Home","title":"DiscreteEntropy.to_bits","text":"to_bits(x::Float64)\n\nReturn frachlog(2) where h is in nats\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.to_bans","page":"Home","title":"DiscreteEntropy.to_bans","text":"to_bans(x::Float64)\n\nReturn frachlog(10) where h is in nats\n\n\n\n\n\n","category":"function"}]
}
