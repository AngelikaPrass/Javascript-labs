from bs4 import BeautifulSoup
import requests
from requests import get
import numpy as np

pages = np.arange(100000, 999999, 1)

for page in pages: 
    page = requests.get("https://mdl.ug.edu.pl/user/profile.php?id=" + str(page))
    soup = BeautifulSoup(page.text, 'lxml')
    match = soup.find('div', class_='profilepic')
    x = match.h3.text
    print(x)