import { create } from "zustand";


type Password = {
  includeNumbers: boolean,
  includeLetters: boolean,
  includeSpecials: boolean,
  includePunctuation: boolean,
  includeUppers: boolean,
  password: string,

  toggleIncludeNumbers: () => void,
  toggleIncludeLetters: () => void,
  toggleIncludeSpecials: () => void,
  toggleIncludePunctuation: () => void,
  toggleIncludeUppers: () => void,

  generatePassword: (length: number) => void
}

const usePassword = create<Password>((set) => ({
  includeLetters: false,
  includeNumbers: false,
  includeSpecials: false,
  includeUppers: false,
  includePunctuation: false,
  password: '',


  toggleIncludeLetters: () => set((state) => ({ includeLetters: !state.includeLetters })),
  toggleIncludeNumbers: () => set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleIncludePunctuation: () => set((state) => ({ includePunctuation: !state.includePunctuation })),
  toggleIncludeSpecials: () => set((state) => ({ includeSpecials: !state.includeSpecials })),
  toggleIncludeUppers: () => set((state) => ({ includeUppers: !state.includeUppers })),
  generatePassword: (len) => set((state) => {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers = '0123456789'
    let specials = `@#$%^&*()_+{}[]<>|\\`
    let punctuation = `!.,;:'"`

    let characters: string = ''
    characters += state.includeLetters ? letters : ''
    characters += state.includeNumbers ? numbers : ''
    characters += state.includePunctuation ? punctuation : ''
    characters += state.includeSpecials ? specials : ''
    characters += state.includeUppers ? uppers : ''

    let pass = ''

    for (let i = 0; i < len; i++) {
      pass += characters[Math.ceil(Math.random() * (characters.length - 1))]
    }

    return { password: pass }
  })
}))

export { usePassword }