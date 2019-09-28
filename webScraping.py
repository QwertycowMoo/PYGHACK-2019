from bs4 import BeautifulSoup
from selenium import webdriver
import pandas as pd
import time

if __name__ == "__main__":
    driver = webdriver.Chrome()
    eventName = []
    date = []
    times = []
    location = []
    info = []
    contactInfo = []
    content = driver.get("https://www.visitchampaigncounty.org/events/calendar-of-events")
    info = (driver.find_elements_by_class_name('event-info'))
    driver.find_element_by_class_name("accept-cookies").click()
    time.sleep(2)
    for i in range(7):
        driver.find_element_by_class_name("events-show-more").click()
    for i in range(len(info)):
        fullEventInfo = info[i].text.split("\n")
        eventName.append(fullEventInfo[0])
        date.append(fullEventInfo[1])
        times.append(fullEventInfo[2])
        try:
            location.append(fullEventInfo[4] + fullEventInfo[5])
        except IndexError:
            location.append("")

        try:
            contactInfo.append(fullEventInfo[8])
        except IndexError:
            contactInfo.append("")

    emptyDesc = []
    emptyUpvotes = []
    for i in range(len(info)):
        emptyDesc.append(" ")
        emptyUpvotes.append("0")
    df = pd.DataFrame({'Name': eventName, 'Location': location, 'time': times, 'date': date, 'description': emptyDesc, 'upvotes': emptyUpvotes})
    df.to_csv('ChampaignEvents.csv', index=False, encoding='utf-8')

    print(eventName)
    print(date)


