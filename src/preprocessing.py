import yfinance as yf
# Step 1: Install yfinance
!pip install yfinance

from sklearn.model_selection import train_test_split

def load(ticker):
    ticker = 'AAPL'
    data = yf.download(ticker, start='2020-01-01', end='2023-01-01')
    return data



def Preprocessing(data):
    """
    Step 2: Data Preprocessing
    - Handle missing values
    - Feature engineering: create target column
    - Split into train/test sets
    """
    # Handle missing values, if any
    data.dropna(inplace=True)

    # Feature Engineering: create a new column for the target variable (next day's closing price)
    data['Target'] = data['Close'].shift(-1)

    # Drop the last row as it has NaN in 'Target'
    data = data[:-1]

    # Define features and target
    X = data[['Close']]
    y = data['Target']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    return X_train, X_test, y_train, y_test


