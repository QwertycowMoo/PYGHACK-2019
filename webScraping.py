from bs4 import BeautifulSoup
from selenium import webdriver
import pandas as pd

if __name__ == "__main__":
    driver = webdriver.Chrome()
    eventName = []
    prices = []
    info = []
    content = driver.get("https://www.visitchampaigncounty.org/events/calendar-of-events")
    info = (driver.find_elements_by_class_name('event-name'))
    for i in range(len(info)):
        print(info[i].text)