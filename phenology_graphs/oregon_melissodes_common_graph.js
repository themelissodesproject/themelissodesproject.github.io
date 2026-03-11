// ======================================================
// Species Occurrence Bar Chart (single-column input)
// Sorted: most common → least common
// Canvas ID: speciesBarChart
// ======================================================

const SpeciesOccurrenceGraph = (() => {

    const speciesList = `
Melissodes ablusus
















Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes bimatris
Melissodes microstictus
Melissodes microstictus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes communis
Melissodes communis

Melissodes communis
Melissodes lupinus

Melissodes robustior

Melissodes agilis


Melissodes saponellus
Melissodes saponellus


Melissodes plumosus


Melissodes robustior




Melissodes robustior



Melissodes utahensis





Melissodes communis


Melissodes communis
Melissodes semilupinus




Melissodes bimatris

Melissodes robustior
Melissodes glenwoodensis

Melissodes communis


Melissodes bimatris

Melissodes utahensis




Melissodes robustior
Melissodes robustior



Melissodes utahensis


Melissodes robustior
Melissodes microstictus
Melissodes stearnsi
















Melissodes saponellus

Melissodes rivalis
Melissodes robustior



Melissodes rivalis
Melissodes robustior





Melissodes rivalis
Melissodes clarkiae
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes rivalis
Melissodes rivalis
Melissodes robustior
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus



Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes rivalis
Melissodes robustior

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes microstictus


Melissodes metenuus
Melissodes metenuus
Melissodes metenuus

Melissodes communis
Melissodes microstictus


Melissodes clarkiae
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes rivalis
Melissodes rivalis
Melissodes lupinus

Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus


Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus

Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes microstictus
Melissodes lupinus
Melissodes robustior
Melissodes robustior

Melissodes lupinus

Melissodes lupinus
Melissodes lupinus


Melissodes metenuus
Melissodes metenuus
Melissodes metenuus

Melissodes clarkiae

Melissodes clarkiae
















Melissodes clarkiae
Melissodes clarkiae

Melissodes pallidisignatus
Melissodes metenuus
Melissodes metenuus
Melissodes lupinus
Melissodes agilis
Melissodes clarkiae
Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes communis
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes microstictus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus

Melissodes lupinus
Melissodes lupinus

Melissodes lupinus


Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus

Melissodes metenuus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus

Melissodes lupinus



Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes clarkiae
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes microstictus

Melissodes lupinus

Melissodes metenuus
Melissodes lupinus
Melissodes lupinus




Melissodes robustior
Melissodes robustior
Melissodes robustior


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes microstictus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus


Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus


Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes rivalis

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior


Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes metenuus
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes communis
Melissodes communis

Melissodes semilupinus
Melissodes semilupinus

Melissodes microstictus



Melissodes robustior
Melissodes clarkiae
Melissodes agilis
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes communis
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus


Melissodes microstictus

Melissodes lupinus

Melissodes metenuus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus

Melissodes lupinus




Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes clarkiae
Melissodes microstictus
Melissodes microstictus


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes robustior
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes microstictus

Melissodes lupinus

Melissodes metenuus
Melissodes lupinus
Melissodes lupinus




Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes microstictus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus


Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus


Melissodes microstictus
Melissodes rivalis

Melissodes rivalis
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior


Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus






Melissodes pallidisignatus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes communis
Melissodes communis
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes rivalis

Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior



Melissodes metenuus
Melissodes metenuus

Melissodes metenuus

Melissodes microstictus
Melissodes metenuus
Melissodes rivalis
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus


Melissodes microstictus


Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus



Melissodes lustrus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior
Melissodes lupinus

Melissodes rivalis
Melissodes metenuus

Melissodes lupinus

Melissodes microstictus
Melissodes microstictus
Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes microstictus

Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes agilis
Melissodes agilis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus











Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus


Melissodes microstictus
Melissodes microstictus

Melissodes microstictus

Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus

Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus


Melissodes metenuus

Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes microstictus
Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes rivalis
Melissodes robustior


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes robustior

Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes metenuus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes rivalis
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes communis




Melissodes robustior
Melissodes glenwoodensis



Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes communis
Melissodes communis
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes rivalis
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior

Melissodes microstictus
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus

Melissodes metenuus
Melissodes lupinus
Melissodes microstictus

Melissodes microstictus
Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes agilis
Melissodes agilis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus











Melissodes lupinus

Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes microstictus
Melissodes metenuus

Melissodes rivalis

Melissodes lupinus
Melissodes lupinus

Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes lupinus
Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes microstictus
Melissodes microstictus


Melissodes metenuus

Melissodes microstictus
Melissodes metenuus

Melissodes metenuus
Melissodes rivalis
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus


Melissodes microstictus
Melissodes microstictus


Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus


Melissodes lustrus

Melissodes microstictus
Melissodes robustior

Melissodes rivalis
Melissodes microstictus
Melissodes microstictus

Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes microstictus



Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus


Melissodes microstictus
Melissodes microstictus

Melissodes microstictus

Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes metenuus

Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus


Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes robustior
Melissodes microstictus
Melissodes microstictus

Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes rivalis
Melissodes lupinus

Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes rivalis

Melissodes lupinus
Melissodes rivalis
Melissodes rivalis
Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes microstictus
Melissodes rivalis
Melissodes lupinus




Melissodes rivalis

Melissodes communis

Melissodes communis

Melissodes communis



Melissodes rivalis



Melissodes rivalis



Melissodes rivalis




Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes communis




Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes robustior


Melissodes communis
Melissodes rivalis
Melissodes robustior
Melissodes communis





Melissodes bimatris

Melissodes bimatris
Melissodes bimatris


Melissodes semilupinus
Melissodes semilupinus
Melissodes bimatris
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes rivalis
Melissodes rivalis
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes microstictus
Melissodes rivalis
Melissodes lupinus



Melissodes communis

Melissodes communis
Melissodes communis




Melissodes rivalis



Melissodes rivalis




Melissodes rivalis






Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes communis
Melissodes robustior





Melissodes rivalis

Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus


Melissodes rivalis


Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes communis


Melissodes communis
Melissodes rivalis


Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
































































































































































































































































































































































































































































Melissodes robustior





Melissodes bimatris

























































































































































































































































Melissodes bimatris









































































Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes communis
Melissodes microstictus
Melissodes metenuus
Melissodes microstictus
Melissodes rivalis
Melissodes rivalis
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes lupinus
Melissodes communis
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus

Melissodes dagosus
Melissodes dagosus
Melissodes communis
Melissodes lupinus


Melissodes communis



Melissodes communis



Melissodes communis
Melissodes communis




















Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes menuachus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes communis
Melissodes communis
Melissodes glenwoodensis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes paululus
Melissodes rivalis
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes menuachus
Melissodes menuachus
Melissodes paululus
Melissodes paululus
Melissodes semilupinus
Melissodes rivalis






Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes agilis
Melissodes menuachus
Melissodes dagosus
Melissodes dagosus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes rivalis
Melissodes dagosus
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes subagilis
Melissodes subagilis
Melissodes lupinus
Melissodes subagilis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lustrus
Melissodes lupinus
Melissodes lupinus


Melissodes microstictus
Melissodes microstictus
Melissodes glenwoodensis
Melissodes pallidisignatus
Melissodes tepidus
Melissodes tepidus
Melissodes lupinus
Melissodes subagilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes bimatris
Melissodes subagilis
Melissodes semilupinus
Melissodes bimatris
Melissodes bimatris
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes microstictus
Melissodes subagilis
Melissodes pallidisignatus
Melissodes lutulentus
Melissodes lutulentus
Melissodes glenwoodensis
Melissodes lupinus
Melissodes agilis
Melissodes menuachus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lutulentus
Melissodes lutulentus
Melissodes lustrus
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes bimatris
Melissodes bimatris
Melissodes bimatris
Melissodes bimatris
Melissodes lutulentus
Melissodes menuachus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes robustior
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes agilis
Melissodes tepidus
Melissodes tepidus
Melissodes dagosus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes rivalis
Melissodes agilis
Melissodes microstictus
Melissodes lutulentus
Melissodes rivalis
Melissodes lupinus
Melissodes tristis
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes bimatris
Melissodes glenwoodensis
Melissodes metenuus
Melissodes pallidisignatus
Melissodes metenuus
Melissodes metenuus
Melissodes dagosus
Melissodes tepidus
Melissodes lustrus
Melissodes lustrus
Melissodes lupinus
Melissodes pallidisignatus
Melissodes robustior
Melissodes robustior
Melissodes microstictus
Melissodes pallidisignatus
Melissodes pullatellus
Melissodes lustrus
Melissodes clarkiae
Melissodes microstictus
Melissodes plumosus
Melissodes rivalis
Melissodes pallidisignatus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes pallidisignatus
Melissodes lutulentus
Melissodes metenuus
Melissodes lupinus
Melissodes robustior
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes robustior
Melissodes pullatellus
Melissodes robustior
Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes metenuus
Melissodes metenuus
Melissodes agilis
Melissodes agilis
Melissodes semilupinus
Melissodes bimatris




Melissodes robustior
Melissodes lustrus
Melissodes lustrus
Melissodes pallidisignatus
Melissodes agilis
Melissodes rivalis
Melissodes microstictus
Melissodes agilis
Melissodes agilis
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes agilis
Melissodes lustrus
Melissodes agilis
Melissodes agilis
Melissodes metenuus
Melissodes lustrus
Melissodes bimatris
Melissodes agilis
Melissodes agilis
Melissodes lupinus
Melissodes agilis
Melissodes microstictus
Melissodes lustrus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes agilis
Melissodes communis
Melissodes rivalis
Melissodes agilis
Melissodes semilupinus
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes agilis
Melissodes subagilis
Melissodes agilis
Melissodes agilis
Melissodes microstictus
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes rivalis
Melissodes lustrus
Melissodes bimatris
Melissodes bimatris
Melissodes microstictus

Melissodes dagosus
Melissodes pallidisignatus
Melissodes tepidus
Melissodes metenuus
Melissodes metenuus
Melissodes lustrus
Melissodes rivalis
Melissodes metenuus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes glenwoodensis
Melissodes tepidus
Melissodes robustior
Melissodes tepidus
Melissodes lutulentus
Melissodes pullatellus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes stearnsi
Melissodes stearnsi
Melissodes rivalis
Melissodes lustrus
Melissodes pallidisignatus
Melissodes tepidus
Melissodes lutulentus
Melissodes pallidisignatus
Melissodes communis
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes metenuus

Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lustrus
Melissodes lustrus
Melissodes stearnsi
Melissodes semilupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes dagosus
Melissodes dagosus
Melissodes metenuus
Melissodes communis
Melissodes communis
Melissodes communis
Melissodes communis
Melissodes communis
Melissodes pallidisignatus
Melissodes communis
Melissodes communis
Melissodes pallidisignatus
Melissodes communis





Melissodes rivalis
Melissodes rivalis
Melissodes rivalis

Melissodes microstictus
Melissodes agilis

Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes pallidisignatus
`;

    let chart = null;
    let speciesNames_global = null;
    let speciesCounts_global = null;

    document.addEventListener("DOMContentLoaded", () => {
        generate();
    });

    function generate() {

        const lines = speciesList
            .trim()
            .split("\n")
            .map(s => s.trim())
            .filter(Boolean);

        const counts = {};

        lines.forEach(name => {
            counts[name] = (counts[name] || 0) + 1;
        });

        // SORT: most common → least common
        const sorted = Object.entries(counts)
            .sort((a, b) => b[1] - a[1]);

        const speciesNames = sorted.map(d => d[0]);
        const speciesCounts = sorted.map(d => d[1]);

        speciesNames_global = speciesNames;
        speciesCounts_global = speciesCounts;

        const canvas = document.getElementById("speciesBarChart");
        if (!canvas) {
            console.error("Canvas #speciesBarChart not found.");
            return;
        }

        build(canvas, speciesNames, speciesCounts);
    }

    function build(canvas, speciesNames, speciesCounts) {

        if (chart) chart.destroy();

        const parentWidth = canvas.parentElement.offsetWidth;
        const scaleFactor = parentWidth < 365 ? parentWidth / 365 : 1;

        chart = new Chart(canvas, {
            type: "bar",
            data: {
                labels: speciesNames,
                datasets: [{
                    label: "Number of records",
                    data: speciesCounts,

                    backgroundColor: "rgba(102, 153, 255, 0.75)",
                    borderColor: "rgba(51, 102, 255, 0.9)",
                    borderWidth: 1 * scaleFactor
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,

                transitions: {
                    active: { animation: { duration: 0 } },
                    resize: { animation: { duration: 0 } }
                },

                plugins: {
                    legend: { display: false },
                    tooltip: {
                        displayColors: false,
                        backgroundColor: "#333",
                        titleColor: "#fff",
                        bodyColor: "#fff",
                        callbacks: {
                            label: ctx => `${ctx.raw} records`
                        }
                    }
                },

                scales: {
                    x: {
                        ticks: {
                            autoSkip: false,
                            maxRotation: 60,
                            minRotation: 60,
                            font: { size: 12 * scaleFactor }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: { size: 12 * scaleFactor }
                        },
                        title: {
                            display: true,
                            text: "Number of occurrences"
                        }
                    }
                }
            }
        });
    }

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const canvas = document.getElementById("speciesBarChart");
            if (canvas && speciesCounts_global) {
                build(canvas, speciesNames_global, speciesCounts_global);
            }
        }, 150);
    });

    return { generate };

})();