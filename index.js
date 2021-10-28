import os
my_secret = os.environ['token']
import requests
import random
import time
import colorama
from colorama import Fore, init, Back, Style
znaky = "abcdefghijklmnopzijklsm1234567890"
vysledek = ""
delka = 8

for i in range(delka):
    vysledek += znaky[random.randint(0,len(znaky)-1)]

#sem si dej inv pokud nechces dej "" a nic tam nepis
invite = " | https://discord.gg/tqch28Y3ks | https://dsc.gg/habibitown  | "

channelID = input("Channel ID: ")
message = input("Message to send: ")
invites = input("Do you want invite? [" + Fore.GREEN + "y" + Fore.RESET + "/" + Fore.RED + "n" + Fore.RESET + "]: ")
#random string = vysledek
randomstr = input("Do you want Random string? [" + Fore.GREEN + "y" + Fore.RESET + "/" + Fore.RED + "n" + Fore.RESET + "]: ")
#https://discordapp.com/api/v6/channels/{channelID}/messages"

if randomstr == "y":
    vysledek = vysledek
else:
    vysledek = ""

if invites == "y":
    invite = invite
else:
    invite = ""

payload = {
  "content": f"{message}{invite}{vysledek}"
}

header = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US',
        'DNT': '1',
        'origin': 'https://discord.com',
        'TE': 'Trailers',
        'X-Super-Properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAxIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6ODMwNDAsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9',
        'authorization': my_secret,
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
}

while True:
 requests.post(f"https://discordapp.com/api/v6/channels/{channelID}/messages", data=payload, headers=header)
 print(Fore.GREEN + "[+] Message sent")
 time.sleep(0.300)
 
