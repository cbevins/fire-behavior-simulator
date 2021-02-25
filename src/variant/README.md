#  ![](favicon.png) cbevins/fire-behavior-simulator/src/variant

Each **DagNode** is an object with a unique name, a value, and a reference to a **Variant** type.  The Variant type provides the DagNode with:
- value input text filtering,
- value input text transformation into the Variant's native storage type,
- native value validation,
- native value transformation into other units-of-measure or text representation,
- decoration of the displayed output value (with units-of-measure or other prefixes or suffixes).

Many DagNodes may share the same Variant.  For example, many spread rate DagNodes share the FireSpreadRate Variant, which is derived from the Quantity Variant.
