import matplotlib.pyplot as plt

def plot_stock_predictions(y_test, predictions):
    """
    Plot the actual vs predicted stock prices.

    Parameters:
    - y_test: pandas Series of actual stock prices (with Date index)
    - predictions: array-like of predicted stock prices
    """
    plt.figure(figsize=(10, 5))
    plt.plot(y_test.index, y_test, label='Actual Price', color='blue')
    plt.plot(y_test.index, predictions, label='Predicted Price', color='orange')
    plt.legend()
    plt.title('Stock Price Prediction')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.grid(True, linestyle='--', alpha=0.6)
    plt.show()
