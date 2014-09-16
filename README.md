tinysong-select2
================

[Tinysong](http://tinysong.com/) picker built on top of [jQuery](http://jquery.com/) and [Select2](http://ivaynberg.github.io/select2/).


#### Serverside Notes

Tinysong API is restricted by [CORS](http://enable-cors.org/) limitations, therefore a local server-side "broker" is needed (check out the given examples).


#### Usage

The plugin must be bound to `input:hidden` elements. It's as easy as the following:

```
$('input').selectTinysong(yourBrokerURL);
```


#### TODOs

- Add some useful options

    * broker customization (query GET parameter)
    * enable overriding of select2 native options (allowClear, multiple, placeholder, etc)

- Find a way to improve/speed-up Grooveshark preview
