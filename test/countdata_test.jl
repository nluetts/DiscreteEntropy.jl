using DiscreteEntropy
using Test


@test svector([1, 2, 3]) isa SampleVector
@test cvector([1, 2, 3]) isa CountVector
@test xivector([0.1, 0.2]) isa XiVector

@test svector([1, 2, 3]) == SampleVector([1, 2, 3])
@test cvector([1, 2, 3]) == CountVector([1, 2, 3])
@test xivector([0.5, 0.6, 0.7]) == XiVector([0.5, 0.6, 0.7])

@test from_data([1, 2], Samples) == CountData([1.0; 2.0;;], 2.0, 1)
@test from_data([1, 2], Histogram) == CountData([2.0 1.0; 1.0 1.0], 3.0, 3)
