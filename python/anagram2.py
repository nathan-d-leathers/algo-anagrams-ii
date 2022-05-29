# Don't forget to run the tests (and create some of your own)

def anagrams_for(word, list_of_words):
	answerArr = []
	wordSort = ''.join(sorted(word))

	for list in list_of_words:
		sortList = ''.join(sorted(list))
		if wordSort == sortList:
			answerArr.append(list)
	return answerArr


		# your code here
