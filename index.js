class Formatter {
  //add static methods here

  static capitalize(str) {

    return  str.charAt(0).toUpperCase()
    + str.slice(1)
    
  }

  static sanitize(str) {
    return str.replace(/[^a-z0-9-' ]/gi, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  
    const words = str.toLowerCase().split(' ');

    words[0] = this.capitalize(words[0]);

    for (let i = 1; i < words.length; i++) {
      if (!exceptions.includes(words[i])) {
        words[i] = this.capitalize(words[i]);
      }
    }

    return words.join(' ');
  }

  static capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }



}