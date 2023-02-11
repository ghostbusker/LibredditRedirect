ghostbuskers-libreddit-redirect.zip: *.json *.js img/* *.md *.txt
	zip -r ghostbuskers-libreddit-redirect.zip * -x .git/* -x img/screenshot.png -x .gitignore -x Makefile

clean:
	rm *.zip
