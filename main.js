/* Copyright (c) 2016 ARM Limited. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function dumpResponse(title, res) {
	if (typeof res !== 'object') return print('Request failed... ' + res);

	print('\n=== ' + title + ' ===');
	print('Status: ' + res.status_code() + ' - ' + res.status_message());

	// @bug: running out of memory on the stack when calling & printing headers().
	// probably because I'm declaring these on the stack when casting from C++ -> JS, and they should be on the heap.

	// var headers = res.headers();
	// print('Headers:');
	// Object.keys(headers).forEach(function (key) {
	// 	print('\t' + key + ': ' + headers[key]);
	// });

	print('Body:');
	print(res.body());
}

(function() {
	// See mbed_app.json for the connectivity method used
	var network = easy_connect(true);
	if (!network) {
		print('Could not connect to the network...');
		return;
	}

	// GET
	var get = HttpRequest(network, http_method.HTTP_GET, 'http://httpbin.org/status/418');
	var gres = get.send(); // this is blocking, should not be blocking...
	dumpResponse('GET REQUEST', gres);

	// POST
	var post = HttpRequest(network, http_method.HTTP_POST, 'http://httpbin.org/post');
	post.set_header('Content-Type', 'application/json'); // does not feel very JS'y

	var pres = post.send(JSON.stringify({ hello: 'world' }));
	dumpResponse('POST REQUEST', pres);
})();
