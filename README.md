<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Fundamentos_de_JavaScript_0"></a>Fundamentos de JavaScript</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="_Repasos_Fundamentales__1"></a><em>Repasos Fundamentales</em></h2>
<p class="has-line-data" data-line-start="5" data-line-end="6">En este repositorio se realizo repaso de Javascript para aumentar nuestros conocimientos y prepararnos para comenzar a utilizar Node.</p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th></th>
<th><code>Tabla de Contenido</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Async &amp; Await</td>
</tr>
<tr>
<td>2</td>
<td>Callbacks</td>
</tr>
<tr>
<td>3</td>
<td>Desestructuracion</td>
</tr>
<tr>
<td>4</td>
<td>Promesas</td>
</tr>
</tbody>
</table>
<h3 class="code-line" data-line-start=16 data-line-end=17 ><a id="Async__Await_16"></a>Async &amp; Await</h3>
<p class="has-line-data" data-line-start="18" data-line-end="19">La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction. su sintaxis es:</p>
<pre><code>async  name([param[, param[, ... param]]]) =&gt; {
statements
}
</code></pre>
<h4 class="code-line" data-line-start=23 data-line-end=24 ><a id="Parmetros_23"></a>Parámetros</h4>
<pre><code>name: El nombre de la función.
param: El nombre de un argumento que se debe pasar a la función.
statements: Las declaraciones que conforman el cuerpo de la función.
</code></pre>
<h4 class="code-line" data-line-start=27 data-line-end=28 ><a id="Valor_de_retorno_27"></a>Valor de retorno</h4>
<p class="has-line-data" data-line-start="28" data-line-end="29">Un objeto <strong>AsyncFunction</strong>, que representa una función asíncrona que ejecuta el código contenido dentro de la función.</p>
<h4 class="code-line" data-line-start=30 data-line-end=31 ><a id="Descripcin_30"></a>Descripción</h4>
<p class="has-line-data" data-line-start="31" data-line-end="32">Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.</p>
<p class="has-line-data" data-line-start="33" data-line-end="34">Una función async puede contener una expresión <strong>await</strong>, la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.</p>
<h3 class="code-line" data-line-start=35 data-line-end=36 ><a id="Callbacks_35"></a>Callbacks</h3>
<p class="has-line-data" data-line-start="37" data-line-end="38">Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.</p>
<pre><code>saludar(nombre) =&gt; {
alert('Hola ' + nombre);
} 
function procesarEntradaUsuario(callback) {
var nombre = prompt('Por favor ingresa tu nombre.');
callback(nombre);
}
procesarEntradaUsuario(saludar);
</code></pre>
<p class="has-line-data" data-line-start="48" data-line-end="49">El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.</p>
<p class="has-line-data" data-line-start="50" data-line-end="51">Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación a sincrónica</p>
<h3 class="code-line" data-line-start=52 data-line-end=53 ><a id="Desestructuracin_52"></a>Desestructuración</h3>
<p class="has-line-data" data-line-start="53" data-line-end="54">La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.</p>
<h4 class="code-line" data-line-start=54 data-line-end=55 ><a id="Sintaxis_54"></a>Sintaxis</h4>
<pre><code>let a, b, rest;

[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b); 
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
</code></pre>
<h3 class="code-line" data-line-start=70 data-line-end=71 ><a id="Descripcin_70"></a>Descripción</h3>
<p class="has-line-data" data-line-start="71" data-line-end="72">Las expresiones de objetos y arreglos literales proporcionan una manera fácil de crear paquetes de datos ad hoc.</p>
<h3 class="code-line" data-line-start=73 data-line-end=74 ><a id="Promesas_73"></a>Promesas</h3>
<p class="has-line-data" data-line-start="75" data-line-end="76">El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.</p>
<h4 class="code-line" data-line-start=77 data-line-end=78 ><a id="Sintaxis_77"></a>Sintaxis</h4>
<pre><code>new Promise( /* ejecutor */ function(resolver, rechazar) { ... } );
</code></pre>
<h4 class="code-line" data-line-start=80 data-line-end=81 ><a id="parmetros_80"></a>parámetros</h4>
<h5 class="code-line" data-line-start=81 data-line-end=82 ><a id="ejecutor_81"></a>ejecutor</h5>
<p class="has-line-data" data-line-start="82" data-line-end="84">Una función con los argumentos resolver y rechazar. La función ejecutor es ejecutada inmediatamente por la implementación de la Promesa, pasándole las funciones resolver y rechazar (el ejecutor es llamado incluso antes de que el constructor de la Promesa devuelva el objeto creado). Las funciones resolver y rechazar, al ser llamadas, resuelven o rechazan la promesa, respectivamente. Normalmente el ejecutor inicia un trabajo asíncrono, y luego, una vez que es completado, llama a la función resolver para resolver la promesa o la rechaza si ha ocurrido un error.<br>
Si un error es lanzado en la función ejecutor, la promesa es rechazada y el valor de retorno del ejecutor es rechazado.</p>
<h4 class="code-line" data-line-start=85 data-line-end=86 ><a id="descripcin_85"></a>descripción</h4>
<p class="has-line-data" data-line-start="86" data-line-end="87">Una Promesa es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa. Permite asociar manejadores que actuarán asincrónicamente sobre un eventual valor en caso de éxito, o la razón de falla en caso de una falla. Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos: en vez de inmediatamente retornar el valor final, el método asíncrono devuelve una promesa de suministrar el valor en algún momento en el futuro.</p>
<p class="has-line-data" data-line-start="88" data-line-end="89">Una <code>Promesa</code> se encuentra en uno de los siguientes estados:</p>
<p class="has-line-data" data-line-start="90" data-line-end="93"><code>pendiente (pending):</code> estado inicial, no cumplida o rechazada.<br>
<code>cumplida (fulfilled):</code> significa que la operación se completó satisfactoriamente.<br>
<code>rechazada (rejected):</code> significa que la operación falló.</p>
<p class="has-line-data" data-line-start="94" data-line-end="95">Una promesa pendiente puede ser cumplida con un valor, o rechazada con una razón (error). Cuando cualquiera de estas dos opciones sucede, los métodos asociados, encolados por el método then de la promesa, son llamados. (Si la promesa ya ha sido cumplida o rechazada en el momento que es anexado su correspondiente manejador, el manejador será llamado, de tal manera que no exista una condición de carrera entre la operación asíncrona siendo completada y los manejadores siendo anexados)</p>
<p class="has-line-data" data-line-start="96" data-line-end="97">Como los métodos <code>Promise.prototype.then()</code> y <code>Promise.prototype.catch()</code> retornan promesas, éstas pueden ser encadenadas.</p>
<h4 class="code-line" data-line-start=98 data-line-end=99 ><a id="_Gracias_por_ver_mi_repositorio__98"></a><em>Gracias por ver mi repositorio</em></h4>