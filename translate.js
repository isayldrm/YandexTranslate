function Translate(word,language){
    this.apiKey = 'trnsl.1.1.20200419T132913Z.b665941759b560ca.d0cb7e79f5ee312f9e731ed5cc4f56a7a88aa47b'
    this.word = word
    this.language = language

    this.xhr = new XMLHttpRequest()
}

Translate.prototype.translateWord = function(callback){
    //Ajax islemleri
    const endPoint = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key='+this.apiKey+'&text='+this.word+'&lang='+this.language+''
    console.log(endPoint)
    this.xhr.open("GET",endPoint)

    this.xhr.onload = ()=>{
        if(this.xhr.status === 200){
            //console.log(JSON.parse(this.xhr.responseText).text[0])
            const json = JSON.parse(this.xhr.responseText)
            const text = json.text[0]
            callback(null,text)
        }else{
            callback('Bir hata oluştu',null)
        }
    }
    this.xhr.send()
}
Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word = newWord
    this.language = newLanguage
}