import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, classification_report

class AdvancedAIUtils:
    def __init__(self):
        # Load NLTK resources if needed
        nltk.download('punkt')
        nltk.download('stopwords')

    def preprocess_text(self, text, remove_stopwords=True, stemming=True):
        # Implement advanced text preprocessing logic here
        stop_words = set(stopwords.words('english'))
        words = word_tokenize(text)
        
        if remove_stopwords:
            filtered_words = [word for word in words if word.lower() not in stop_words]
        else:
            filtered_words = words
        
        if stemming:
            porter = nltk.PorterStemmer()
            stemmed_words = [porter.stem(word) for word in filtered_words]
            preprocessed_text = ' '.join(stemmed_words)
        else:
            preprocessed_text = ' '.join(filtered_words)
        
        return preprocessed_text

    def evaluate_model(self, y_true, y_pred, average='binary'):
        # Calculate and return advanced evaluation metrics for model performance
        accuracy = accuracy_score(y_true, y_pred)
        precision = precision_score(y_true, y_pred, average=average)
        recall = recall_score(y_true, y_pred, average=average)
        f1 = f1_score(y_true, y_pred, average=average)
        classification_rep = classification_report(y_true, y_pred)
        
        return {'accuracy': accuracy, 'precision': precision, 'recall': recall, 'f1': f1, 'classification_report': classification_rep}

if __name__ == '__main__':
    utils = AdvancedAIUtils()
    
    text = "This is a sample text for preprocessing."
    preprocessed_text = utils.preprocess_text(text, remove_stopwords=True, stemming=True)
    print('Preprocessed text:', preprocessed_text)
    
    y_true = [1, 0, 1, 0, 1]
    y_pred = [1, 0, 0, 0, 1]
    evaluation_metrics = utils.evaluate_model(y_true, y_pred, average='binary')
    print('Evaluation metrics:', evaluation_metrics)
