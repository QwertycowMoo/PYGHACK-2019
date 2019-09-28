from bs4 import BeautifulSoup
from selenium import webdriver
import pandas as pd
import time

if __name__ == "__main__":

    #Urbana
    driver = webdriver.Chrome()
    eventName = []
    date = []
    times = []
    location = []
    info = []
    contactInfo = []
    description = []
    emptyDesc = []
    emptyUpvotes = []
    content = driver.get("https://calendars.illinois.edu/list/7")
    info = (driver.find_element_by_class_name('place-on-screen')).text.split("\n")
    print(info[0])

    currentDate = "Saturday"
    formattedDate = "month dd, yyyy"
    for i in range(0, len(info) - 4):
        try:

            if (info[i].split(',')[2] == ' 2019'):
                currentDate = info[i]
                formattedDate = currentDate.split(',')[1].strip() + "," + currentDate.split(',')[2]
        except IndexError:

            information = info[i]
            try:
                #checks for times
                if (info[i] == "All Day"):
                    date.append(formattedDate)
                    times.append("12:00am - 11:59pm")
                    location.append((info[i + 1]))
                    eventName.append((info[i + 2]))
                    description.append((info[i + 3]))
                #checks that there is a time
                elif (isinstance(int(information[0:1]), int)) and ((information[len(information) - 2:] == "pm") or (information[len(information) - 2:] == "am")):
                    date.append(formattedDate)
                    times.append(info[i])
                    location.append((info[i + 1]))
                    eventName.append((info[i + 2]))
                    description.append((info[i + 3]))

                else:
                    continue
            except ValueError:
                pass

    for i in range(477):
         emptyDesc.append(" ")
         emptyUpvotes.append("0")
    print(len(eventName))
    print(len(times))
    print(len(location))
    print(len(description))
    print(len(date))
    print(len(emptyUpvotes))
    df = pd.DataFrame({'Name': eventName, 'Location': location, 'time': times, 'date': date, 'description': description,
                       'upvotes': emptyUpvotes})
    #df.to_csv('UrbanaEvents.csv', index=False, encoding='utf-8')

    #Champaign event processing

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
    df = pd.DataFrame({'Name': eventName, 'Location': location, 'time': times, 'date': date, 'description': emptyDesc,
                       'upvotes': emptyUpvotes})
    df.to_csv('ChampaignEvents.csv', index=False, encoding='utf-8')