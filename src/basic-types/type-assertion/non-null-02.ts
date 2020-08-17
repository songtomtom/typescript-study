// document.querySelector('.menu-item').innerHTML;

(document.querySelector('.menu-item') as HTMLDivElement).innerHTML;
(<HTMLDivElement>document.querySelector('.menu-item')).innerHTML;

document.querySelector('.menu-item')!.innerHTML;
