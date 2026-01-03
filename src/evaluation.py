from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

def evaluate_predictions(y_test, predictions):
    """
    Evaluate model predictions against actual values.

    Parameters:
    - y_test: pandas Series of actual stock prices
    - predictions: array-like of predicted stock prices

    Returns:
    - dict with RMSE, MAE, and R² scores
    """
    rmse = mean_squared_error(y_test, predictions, squared=False)  # Root Mean Squared Error
    mae = mean_absolute_error(y_test, predictions)                 # Mean Absolute Error
    r2 = r2_score(y_test, predictions)                             # R² score

    return {
        "RMSE": rmse,
        "MAE": mae,
        "R²": r2
    }
