// ======================================================
// Species Occurrence Bar Chart (single-column input)
// Sorted: most common → least common
// Canvas ID: speciesBarChart
// ======================================================

const SpeciesOccurrenceGraph = (() => {

    const speciesList = `
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes communis
Melissodes communis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes tristis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes subagilis
Melissodes semilupinus
Melissodes robustior
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes paululus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes menuachus
Melissodes menuachus
Melissodes menuachus
Melissodes menuachus
Melissodes menuachus
Melissodes lutulentus
Melissodes lutulentus
Melissodes lutulentus
Melissodes bimatris
Melissodes bimatris
Melissodes bimatris
Melissodes bimatris
Melissodes bimatris
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes plumosus
Melissodes metenuus
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
Melissodes glenwoodensis
Melissodes pallidisignatus
Melissodes dagosus
Melissodes semilupinus
Melissodes tepidus
Melissodes robustior
Melissodes communis
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes robustior
Melissodes microstictus
Melissodes lutulentus
Melissodes tepidus
Melissodes tepidus
Melissodes pallidisignatus
Melissodes microstictus
Melissodes communis
Melissodes robustior
Melissodes robustior
Melissodes communis
Melissodes pallidisignatus
Melissodes tepidus
Melissodes communis
Melissodes clarkiae
Melissodes tepidus
Melissodes rivalis
Melissodes bimatris
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes communis
Melissodes tepidus
Melissodes pallidisignatus
Melissodes communis
Melissodes tepidus
Melissodes tepidus
Melissodes robustior
Melissodes tepidus
Melissodes pullatellus
Melissodes pallidisignatus
Melissodes robustior
Melissodes robustior
Melissodes semilupinus
Melissodes robustior
Melissodes microstictus
Melissodes pullatellus
Melissodes pallidisignatus
Melissodes microstictus
Melissodes pallidisignatus
Melissodes communis
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes communis
Melissodes microstictus
Melissodes dagosus
Melissodes pallidisignatus
Melissodes lutulentus
Melissodes rivalis
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus

Melissodes dagosus
Melissodes dagosus

Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes communis
Melissodes microstictus
Melissodes communis
Melissodes lupinus
Melissodes robustior
Melissodes communis
Melissodes tepidus
Melissodes lupinus
Melissodes bimatris
Melissodes lutulentus
Melissodes metenuus
Melissodes lutulentus
Melissodes lupinus
Melissodes tepidus
Melissodes lupinus
Melissodes dagosus
Melissodes subagilis
Melissodes pallidisignatus
Melissodes bimatris
Melissodes lupinus
Melissodes tepidus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes dagosus
Melissodes tepidus
Melissodes tepidus
Melissodes tepidus
Melissodes rivalis
Melissodes glenwoodensis
Melissodes subagilis
Melissodes pallidisignatus
Melissodes tepidus
Melissodes robustior
Melissodes glenwoodensis
Melissodes lupinus
Melissodes lustrus
Melissodes subagilis
Melissodes lupinus
Melissodes microstictus
Melissodes tepidus
Melissodes tepidus
Melissodes rivalis
Melissodes lutulentus
Melissodes tepidus
Melissodes subagilis
Melissodes lupinus
Melissodes agilis
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes tepidus
Melissodes bimatris
Melissodes lupinus
Melissodes agilis
Melissodes lutulentus
Melissodes tepidus
Melissodes agilis
Melissodes pallidisignatus
Melissodes menuachus
Melissodes bimatris
Melissodes bimatris
Melissodes pallidisignatus
Melissodes microstictus
Melissodes subagilis
Melissodes pallidisignatus
Melissodes pallidisignatus
Melissodes rivalis
Melissodes lustrus
Melissodes dagosus
Melissodes dagosus
Melissodes tepidus
Melissodes agilis
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes dagosus
Melissodes tepidus
Melissodes tepidus
Melissodes semilupinus
Melissodes lupinus





Melissodes lupinus


Melissodes communis
Melissodes robustior


Melissodes metenuus
Melissodes metenuus
Melissodes metenuus


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus


Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
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
Melissodes microstictus
Melissodes rivalis
Melissodes communis

Melissodes lupinus
Melissodes rivalis
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus


Melissodes robustior
Melissodes robustior
Melissodes robustior
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
Melissodes microstictus
Melissodes microstictus
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
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus





Melissodes microstictus
Melissodes robustior
Melissodes microstictus
Melissodes metenuus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes metenuus
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes lupinus
Melissodes microstictus
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
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus

Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
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
Melissodes lupinus
Melissodes lupinus

Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes rivalis

Melissodes rivalis
Melissodes communis
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes robustior
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
Melissodes microstictus
Melissodes microstictus



Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus



Melissodes robustior
Melissodes lupinus
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus

Melissodes robustior
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes robustior

Melissodes robustior
Melissodes rivalis

Melissodes rivalis
Melissodes microstictus
Melissodes robustior
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus



Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes robustior
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
Melissodes robustior
Melissodes robustior
Melissodes robustior



Melissodes lupinus
Melissodes lupinus
Melissodes lupinus


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
Melissodes robustior

Melissodes robustior
Melissodes robustior

Melissodes metenuus






Melissodes rivalis



Melissodes rivalis

Melissodes microstictus

Melissodes lupinus

Melissodes communis

Melissodes communis

Melissodes communis

Melissodes rivalis

Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus



Melissodes robustior
Melissodes robustior
Melissodes lupinus
Melissodes rivalis
Melissodes lupinus









Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus


Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes microstictus

Melissodes lupinus
Melissodes lupinus


Melissodes microstictus
Melissodes robustior
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
Melissodes robustior
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
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus

Melissodes microstictus
Melissodes microstictus



Melissodes robustior
Melissodes robustior
Melissodes robustior
Melissodes microstictus
Melissodes microstictus

Melissodes lupinus
Melissodes lupinus

Melissodes metenuus
Melissodes rivalis

Melissodes lupinus
Melissodes robustior
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus


Melissodes lustrus



Melissodes lupinus
Melissodes lupinus
Melissodes robustior
Melissodes robustior
Melissodes robustior
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
Melissodes robustior
Melissodes microstictus
Melissodes metenuus
Melissodes metenuus



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
Melissodes lupinus

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
Melissodes rivalis
Melissodes metenuus
Melissodes microstictus

Melissodes metenuus

Melissodes metenuus
Melissodes metenuus



Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes metenuus


Melissodes robustior
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
Melissodes lupinus
Melissodes lupinus
Melissodes clarkiae
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
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus



Melissodes microstictus

Melissodes lupinus
Melissodes microstictus
Melissodes lupinus

Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus

Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes metenuus

Melissodes microstictus
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
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes metenuus

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
Melissodes microstictus
Melissodes lupinus
Melissodes robustior
Melissodes lupinus
Melissodes robustior
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes microstictus
Melissodes rivalis
Melissodes rivalis
Melissodes lupinus




Melissodes microstictus

Melissodes rivalis
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus

Melissodes lupinus
Melissodes robustior
Melissodes rivalis
Melissodes robustior
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
Melissodes rivalis
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
Melissodes pallidisignatus
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
Melissodes pallidisignatus


Melissodes rivalis

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
Melissodes lupinus
Melissodes microstictus
Melissodes lupinus
Melissodes microstictus
Melissodes microstictus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes communis
Melissodes communis
Melissodes communis
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes metenuus
Melissodes microstictus
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
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes clarkiae
Melissodes clarkiae
Melissodes agilis
Melissodes rivalis
Melissodes dagosus
Melissodes rivalis
Melissodes microstictus
Melissodes metenuus
Melissodes microstictus
Melissodes communis

Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes dagosus
Melissodes communis
Melissodes lupinus
Melissodes lupinus
Melissodes communis































































































































































































































































































































































































Melissodes clarkiae
Melissodes clarkiae









Melissodes rivalis















Melissodes clarkiae

Melissodes clarkiae


Melissodes lustrus
Melissodes rivalis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes lupinus
Melissodes microstictus
Melissodes agilis
Melissodes agilis
Melissodes subagilis
Melissodes agilis
Melissodes metenuus
Melissodes microstictus
Melissodes microstictus
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes agilis
Melissodes semilupinus
Melissodes agilis
Melissodes rivalis
Melissodes communis
Melissodes agilis
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes lustrus
Melissodes microstictus
Melissodes agilis
Melissodes lupinus
Melissodes agilis
Melissodes agilis
Melissodes bimatris
Melissodes lustrus
Melissodes metenuus
Melissodes agilis
Melissodes agilis
Melissodes lustrus
Melissodes agilis
Melissodes microstictus
Melissodes microstictus
Melissodes microstictus
Melissodes agilis
Melissodes agilis
Melissodes microstictus
Melissodes rivalis
Melissodes agilis
Melissodes pallidisignatus
Melissodes lustrus
Melissodes lustrus
Melissodes rivalis
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes metenuus
Melissodes glenwoodensis
Melissodes metenuus
Melissodes metenuus
Melissodes lupinus





















Melissodes communis
Melissodes communis



Melissodes communis


Melissodes communis






Melissodes stearnsi
Melissodes stearnsi
Melissodes metenuus
Melissodes metenuus
Melissodes stearnsi
Melissodes metenuus
Melissodes lustrus
Melissodes lustrus
Melissodes metenuus
Melissodes metenuus
Melissodes lustrus
Melissodes metenuus
Melissodes metenuus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lustrus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes lupinus
Melissodes glenwoodensis
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