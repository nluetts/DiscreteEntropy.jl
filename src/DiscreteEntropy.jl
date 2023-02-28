module DiscreteEntropy


export Maximum_Likelihood, JackknifeML, MillerMadow, Grassberger, Schurmann,
    SchurmannGeneralised, ChaoShen, Zhang, Bonachela

# estimators
export maximum_likelihood, jackknife_ml, miller_madow, grassberger,
    schurmann, schurmann_generalised, chao_shen, zhang, bonachela


export Bayes, Jeffrey, LaPlace, SchurmannGrassberger, Minimax, NSB, ANSB, PYM

# estimators
export bayes, jeffrey, laplace, schurmann_grassberger, minimax, nsb, ansb, pym

# convenience function
export entropy


# Other Discrete Entropy measures, metrics and calculations
export mutual_information
export kl_divergence, jeffreys_divergence, jensen_shannon_divergence, jensen_shannon_distance
export jackknife, bayesian_bootstrap, bootstrap

# utilities
export to_bits, to_bans, to_pmf, gammalndiff, logx, xlogx, logspace, update_or_insert!
export from_samples, from_counts, to_csv_string, from_dict

include("countdata.jl")
include("estimator.jl")
include("utils.jl")
include("mutual_information.jl")
include("divergence.jl")
include("resample.jl")
include("Frequentist/frequentist.jl")
include("Frequentist/bub.jl")
include("Bayesian/bayesian.jl")
include("Bayesian/nsb.jl")
include("Bayesian/pym.jl")

end
