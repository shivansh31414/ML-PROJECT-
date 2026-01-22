def test_predict(client):
    # Signup + login to get token
    client.post("/signup", json={"username": "testuser", "password": "testpass"})
    login_res = client.post("/login", json={"username": "testuser", "password": "testpass"})
    token = login_res.get_json()["access_token"]

    # Call predict with features
    headers = {"Authorization": f"Bearer {token}"}
    response = client.post("/predict", json={"feature_a": 1.2, "feature_b": 3.4, "feature_c": 5.6}, headers=headers)

    assert response.status_code == 200
    data = response.get_json()
    assert "result" in data
