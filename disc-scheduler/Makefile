run:
	BROWSER=none npm run start & npm run electron

kill:
	lsof | grep 3000 | grep node | awk '{ print $$2 }' | xargs kill

