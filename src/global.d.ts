declare module '*.md';
declare module '*.svg';
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}
