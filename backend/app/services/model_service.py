from typing import Dict

def run_model(features: Dict) -> float:
    a = float(features.get("feature_a", 0.0))
    b = float(features.get("feature_b", 0.0))
    c = float(features.get("feature_c", 0.0))
    return 0.6 * a + 0.3 * b + 0.1 * c
