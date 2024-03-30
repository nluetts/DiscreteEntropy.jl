var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = DiscreteEntropy\nDocTestSetup = quote\n    using DiscreteEntropy\nend\n","category":"page"},{"location":"#DiscreteEntropy","page":"Home","title":"DiscreteEntropy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package for the estimation of Shannon entropy of discrete distributions.","category":"page"},{"location":"#Multiplicities","page":"Home","title":"Multiplicities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DiscreteEntropy uses the multiplicities representation of data. Given a histogram of samples","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [DiscreteEntropy]","category":"page"},{"location":"#DiscreteEntropy.AbstractEstimator","page":"Home","title":"DiscreteEntropy.AbstractEstimator","text":"AbstractEstimator\n\nSupertype for NonParameterised and Parameterised entropy estimators.\n\n\n\n\n\n","category":"type"},{"location":"#DiscreteEntropy.CountData","page":"Home","title":"DiscreteEntropy.CountData","text":"CountData\nan 2 x m matrix where m[1, :] is counts and m[2, :] the number of bins with those counts\n[[2 3 1] => counts / icts\n[2 1 2]] => bins / mm\nso we have two bins with two, 1 bin with 3, and 2 bins with 1\n\n\n\n\n\n","category":"type"},{"location":"#DiscreteEntropy.EntropyData","page":"Home","title":"DiscreteEntropy.EntropyData","text":"abstract type EntropyData\n\n\n\n\n\n","category":"type"},{"location":"#DiscreteEntropy.ansb-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.ansb","text":"ansb(data::CountData; undersampled::Float64=0.1)::Float64\n\nReturn the Asymptotic NSB estimation of the Shannon entropy of data in nats.\n\nSee Asymptotic NSB estimator (equations 11 and 12)\n\nhatH_tinyANSB = (C_gamma - log(2)) + 2 log(N) - psi(Delta)\n\nwhere C_gamma is Euler's Gamma (approx 057721), psi_0 is the digamma function and Delta the number of coincidences in the data.\n\nThis is designed for the extremely undersampled regime (K ~ N) and diverges with N when well-sampled. ANSB requires that NK  0, which we set to be NK  01 by default\n\nExternal Links\n\nAsymptotic NSB estimator (equations 11 and 12)\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.bonachela-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.bonachela","text":"bonachela(data::CountData)\n\nReturn the Bonachela estimator of the Shannon entropy of data in nats.\n\nhatH_B = frac1N+2 sum_i=1^K left( (h_i + 1) sum_j=n_i + 2^N+2 frac1j right)\n\nExternal Links\n\nEntropy estimates of small data sets\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.chao_shen-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.chao_shen","text":"chao_shen(data::CountData)\n\nReturn the Chao-Shen estimate of the Shannon entropy of data in nats.\n\nhatH_CS = - sum_i=i^K frachatp_i^CS log hatp_i^CS1 - (1 - hatp_i^CS)\n\nwhere\n\nhatp_i^CS = (1 - frac1 - hatp_i^MLN) hatp_i^ML\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.chao_wang_jost-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.chao_wang_jost","text":"chao_wang_jost(data::CountData)\n\nReturn the Chao Wang Jost Shannon entropy estimate of data in nats.\n\nhatH_tinyCWJ = sum_1 leq h_i leq N-1 frach_iN left(sum_k=h_i^N-1 frac1k right) +\nfracf_1N (1 - A)^-N + 1 left - log(A) - sum_r=1^N-1 frac1r (1 - A)^r right\n\nwith\n\nA = begincases\nfrac2 f_2(N-1) f_1 + 2 f_2   textif  f_2  0 \nfrac2(N-1)(f_1 - 1) + 1   textif  f_2 = 0  f_1 neq 0 \n1  textif  f_1 = f_2 = 0\nendcases\n\nwhere f_1 is the number of singletons and f_2 the number of doubletons in data.\n\nNotes\n\nThe algorithm is slightly modified port of that used in the entropart R library.\n\nExternal Links\n\nEntropy and the species accumulation curve: a novel entropy estimator via discovery rates of new species\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.conditional_entropy-Tuple{CountVector, CountVector}","page":"Home","title":"DiscreteEntropy.conditional_entropy","text":"conditional_entropy(pmfX::AbstractVector{AbstractFloat}, pmfXY::AbstractVector{AbstractFloat})\nconditional_entropy(X::CountData, XY::CountData, estimator::Type{T}) where {T<:NonParameterisedEstimator}\nconditional_entropy(X::CountData, XY::CountData, estimator::Type{T}, param) where {T<:ParameterisedEstimator}\n\nCompute the conditional entropy of Y conditioned on X\n\nH(Y mid X) = - sum_x in X y in Y p(x y) ln fracp(x y)p(x)\n\nCompute the estimated conditional entropy of Y given X, from counts of X, and (X,Y) and estimator estimator\n\nhatH(Y mid X) = hatH(X Y) - hatH(X)\n\n\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.from_counts-Tuple{CountVector, Bool}","page":"Home","title":"DiscreteEntropy.from_counts","text":" from_counts(counts::CountVector, remove_zeros::Bool)\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.from_data-Tuple{AbstractVector, Type{Samples}}","page":"Home","title":"DiscreteEntropy.from_data","text":"from_data(data::AbstractVector, ::Type{Samples})\nfrom_data(data::AbstractVector, ::Type{Histogram})\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.from_samples-Tuple{String, Any}","page":"Home","title":"DiscreteEntropy.from_samples","text":"from_samples\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.grassberger-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.grassberger","text":"grassberger(data::CountData)\n\nReturn the Grassberger (1988) estimation of Shannon entropy of data in nats\n\nhatH_tinyGr88 = sum_i frach_iH left(log(N) - psi(h_i) - frac(-1)^h_in_i + 1  right)\n\nEquation 13 from Finite sample corrections to entropy and dimension estimate\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.jackknife-Tuple{CountData, Function}","page":"Home","title":"DiscreteEntropy.jackknife","text":"jackknife(data::CountData, statistic::Function; corrected=false)\n\nCompute the jackknifed estimate of statistic on data.\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.jackknife_mle-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.jackknife_mle","text":"jackknife_mle(data::CountData; corrected=false)::Tuple{AbstractFloat, AbstractFloat}\n\nReturn the jackknifed estimate of data and the variance of the jackknifing (not the variance of the estimator itself).\n\nIf corrected is true, then the variance is scaled with n-1, else it is scaled with n\n\nAs found in the paper\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.jeffreys_divergence-Tuple{Any, Any}","page":"Home","title":"DiscreteEntropy.jeffreys_divergence","text":"jeffreys_divergence(p, q)\n(link)[https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7516653/]\n\nJ(p q) = D_KL(p Vert q) + D_KL(q Vert p)\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.jensen_shannon_distance-Tuple{AbstractVector, AbstractVector, Function}","page":"Home","title":"DiscreteEntropy.jensen_shannon_distance","text":"jensen_shannon_distance(P::AbstractVector, Q::AbstractVector, estimator)\n\nCompute the Jensen Shannon Distance\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.jensen_shannon_divergence-Tuple{AbstractVector, AbstractVector}","page":"Home","title":"DiscreteEntropy.jensen_shannon_divergence","text":"jenson_shannon_divergence(countsP::AbstractVector, countsQ::AbstractVector)\njenson_shannon_divergence(countsP::AbstractVector, countsQ::AbstractVector, estimator::Type{T}) where {T<:NonParamterisedEstimator}\n\nCompute the Jenson Shannon Divergence between discrete distributions P and q, as represented by their histograms.\n\nwidehatJS(p q) = hatHleft(fracp + q2 right) - left( fracH(p) + H(q)2 right)\n\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.kl_divergence-Tuple{CountVector, CountVector}","page":"Home","title":"DiscreteEntropy.kl_divergence","text":"kl_divergence(p::AbstractVector, q::AbstractVector)::Float64\n\nD_KL(P  Q) = sum_x in X P(x) log left( fracP(x)Q(x) right)\n\nCompute the Kullback-Lebler Divergence between two discrete distributions. Both distributions needs to be defined over the same space, so length(p) == length(q). If the distributions are not normalised, they will be.\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.logx-Tuple{Any}","page":"Home","title":"DiscreteEntropy.logx","text":"logx(x)::Float64\n\nReturns natural logarithm of x, or 0.0 if x is zero\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.marginal_counts-Tuple{Matrix, Any}","page":"Home","title":"DiscreteEntropy.marginal_counts","text":"marginal_counts(contingency_matrix::Matrix, dim)\n\nReturn the unnormalised marginal counts of contingency_matrix along dimension dim.\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.maximum_likelihood-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.maximum_likelihood","text":"maximum_likelihood(data::CountData)::Float64\n\nReturn the maximum likelihood estimation of Shannon entropy of data in nats.\n\nhatH_tinyML = - sum_i=1^K p_i log(p_i)\n\nor equivalently\n\nhatH_tinyML = log(N) - frac1N sum_i=1^Kh_i log(h_i)\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.miller_madow-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.miller_madow","text":"miller_madow(data::CountData)\n\nReturn the Miller Madow estimation of Shannon entropy, with a positive bias based on the total number of samples seen (N) and the support size (K).\n\nhatH_tinyMM = hatH_tinyML + fracK - 12N\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.nsb-Tuple{CountData, Any}","page":"Home","title":"DiscreteEntropy.nsb","text":"nsb(data, K=data.K)\n\nReturns the Bayesian estimate of Shannon entropy of data, using the Nemenman, Shafee, Bialek algorithm\n\nhatH^textNSB = frac int_0^ln(K) dxi  rho(xi textbfn) langle H^m rangle_beta (xi)  \n                             int_0^ln(K) dxi  rho(ximid n)\n\nwhere\n\nrho(xi mid textbfn) =\n    mathcalP(beta (xi)) frac Gamma(kappa(xi))Gamma(N + kappa(xi))\n    prod_i=1^K fracGamma(n_i + beta(xi))Gamma(beta(xi))\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.pert-Union{Tuple{T}, Tuple{CountData, Type{T}}} where T<:AbstractEstimator","page":"Home","title":"DiscreteEntropy.pert","text":"pert(data::CountData, estimator)\n\nA Pert estimate of entropy, where\n\nH = \\frac{a + 4b + c}{6}\n\nwhere a is the minimum (maximum_likelihood), c is the maximum (log(k)) and b is the most likely value (ChaoShen)\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.pym-Tuple{Vector{Int64}, Vector{Int64}}","page":"Home","title":"DiscreteEntropy.pym","text":" pym(_mm::Vector{Int64}, _icts::Vector{Int64})\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.schurmann","page":"Home","title":"DiscreteEntropy.schurmann","text":"schurmann(data::CountData, ξ::Float64 = ℯ^(-1/2))\n\nReturn the Schurmann estimate of Shannon entropy of data in nats.\n\nhatH_SHU = psi(N) - frac1N sum_i=1^K  h_i left( psi(h_i) + (-1)^h_i _0^frac1xi - 1 fract^h_i-11+tdt right)\n\n\nThis is no one ideal value for xi, however the paper suggests e^(-12) approx 06\n\nExternal Links\n\nschurmann\n\n\n\n\n\n","category":"function"},{"location":"#DiscreteEntropy.schurmann_generalised-Union{Tuple{T}, Tuple{CountVector, Vector{T}}} where T<:Real","page":"Home","title":"DiscreteEntropy.schurmann_generalised","text":"schurmann_generalised(data::CountVector, xis::XiVector{T}) where {T<:Real}\n\nschurmann_generalised\n\nhatH_tinySHU = psi(N) - frac1N sum_i=1^K  h_i left( psi(h_i) + (-1)^h_i _0^frac1xi_i - 1 fract^h_i-11+tdt right)\n\n\nReturn the generalised Schurmann entropy estimation, given a countvector data and a xivector xis, which must both be the same length.\n\nschurmann_generalised(data::CountVector, xis::Distribution, scalar=false)\n\nComputes the generalised Schurmann entropy estimation, given a countvector data and a distribution xis.\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.shrink-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.shrink","text":"shrink(data::CountData)\n\nReturn the Shrinkage, or James-Stein estimator of Shannon entropy for data in nats.\n\nhatH_tinySHR = - sum_i=1^K hatp_x^tinySHR log(hatp_x^tinySHR)\n\nwhere\n\nhatp_x^tinySHR = lambda t_x + (1 - lambda) hatp_x^tinyML\n\nand\n\nlambda = frac 1 - sum_x=1^K (hatp_x^tinySHR)^2(n-1) sum_x=1^K (t_x - hatp_x^tinyML)^2\n\nwith\n\nt_x = 1  K\n\nNotes\n\nBased on the implementation in the R package entropy\n\nExternal Links\n\nEntropy Inference and the James-Stein Estimator\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.to_bans-Tuple{Float64}","page":"Home","title":"DiscreteEntropy.to_bans","text":"to_bans(x::Float64)\n\nReturn frachlog(10) where h is in nats\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.to_bits-Tuple{Float64}","page":"Home","title":"DiscreteEntropy.to_bits","text":"to_bits(x::Float64)\n\nReturn frachlog(2) where h is in nats\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.xlogx-Tuple{Any}","page":"Home","title":"DiscreteEntropy.xlogx","text":"xlogx(x::Float64)\n\nReturns x * log(x) for x ≥ 0, or 0.0 if x is zero\n\n\n\n\n\n","category":"method"},{"location":"#DiscreteEntropy.zhang-Tuple{CountData}","page":"Home","title":"DiscreteEntropy.zhang","text":"zhang(data::CountData)\n\nReturn the Zhang estimate of the Shannon entropy of data in nats.\n\nThe recommended definition of Zhang's estimator is from Grabchak et al.\n\nhatH_Z = sum_i=1^K hatp_i sum_v=1^N - h_i frac1v _j=0^v-1 left( 1 + frac1 - h_iN - 1 - j right)\n\nThe actual algorithm comes from Fast Calculation of entropy with Zhang's estimator by Lozano et al..\n\nLinks\n\nEntropy estimation in turing's perspective\n\n\n\n\n\n","category":"method"}]
}
