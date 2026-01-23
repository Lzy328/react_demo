from selenium import  webdriver
def test_connect_chrome():
    ''''''
    driver = webdriver.Chrome()
    driver.get("http://www.baidu.com")
    driver.quit()

if __name__ == '__main__':
    test_connect_chrome()