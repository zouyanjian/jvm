import{_ as a,d as e}from"./app.a2dbceb3.js";const i={},r=e('<h1 id="jvm-\u6027\u80FD\u8C03\u4F18" tabindex="-1"><a class="header-anchor" href="#jvm-\u6027\u80FD\u8C03\u4F18" aria-hidden="true">#</a> JVM \u6027\u80FD\u8C03\u4F18</h1><p>\u5728\u9AD8\u6027\u80FD\u786C\u4EF6\u4E0A\u90E8\u7F72\u7A0B\u5E8F\uFF0C\u76EE\u524D\u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u901A\u8FC7 64 \u4F4D JDK \u6765\u4F7F\u7528\u5927\u5185\u5B58\uFF1B</li><li>\u4F7F\u7528\u82E5\u5E72\u4E2A 32 \u4F4D\u865A\u62DF\u673A\u5EFA\u7ACB\u903B\u8F91\u96C6\u7FA4\u6765\u5229\u7528\u786C\u4EF6\u8D44\u6E90\u3002</li></ul><h2 id="\u4F7F\u7528-64-\u4F4D-jdk-\u7BA1\u7406\u5927\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-64-\u4F4D-jdk-\u7BA1\u7406\u5927\u5185\u5B58" aria-hidden="true">#</a> \u4F7F\u7528 64 \u4F4D JDK \u7BA1\u7406\u5927\u5185\u5B58</h2><p>\u5806\u5185\u5B58\u53D8\u5927\u540E\uFF0C\u867D\u7136\u5783\u573E\u6536\u96C6\u7684\u9891\u7387\u51CF\u5C11\u4E86\uFF0C\u4F46\u6BCF\u6B21\u5783\u573E\u56DE\u6536\u7684\u65F6\u95F4\u53D8\u957F\u3002 \u5982\u679C\u5806\u5185\u5B58\u4E3A 14 G\uFF0C\u90A3\u4E48\u6BCF\u6B21 Full GC \u5C06\u957F\u8FBE\u6570\u5341\u79D2\u3002\u5982\u679C Full GC \u9891\u7E41\u53D1\u751F\uFF0C\u90A3\u4E48\u5BF9\u4E8E\u4E00\u4E2A\u7F51\u7AD9\u6765\u8BF4\u662F\u65E0\u6CD5\u5FCD\u53D7\u7684\u3002</p><p>\u5BF9\u4E8E\u7528\u6237\u4EA4\u4E92\u6027\u5F3A\u3001\u5BF9\u505C\u987F\u65F6\u95F4\u654F\u611F\u7684\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u7ED9 Java \u865A\u62DF\u673A\u5206\u914D\u8D85\u5927\u5806\u7684\u524D\u63D0\u662F\u6709\u628A\u63E1\u628A\u5E94\u7528\u7A0B\u5E8F\u7684 Full GC \u9891\u7387\u63A7\u5236\u5F97\u8DB3\u591F\u4F4E\uFF0C\u81F3\u5C11\u8981\u4F4E\u5230\u4E0D\u4F1A\u5F71\u54CD\u7528\u6237\u4F7F\u7528\u3002</p><p>\u53EF\u80FD\u9762\u4E34\u7684\u95EE\u9898\uFF1A</p><ul><li>\u5185\u5B58\u56DE\u6536\u5BFC\u81F4\u7684\u957F\u65F6\u95F4\u505C\u987F\uFF1B</li><li>\u73B0\u9636\u6BB5\uFF0C64 \u4F4D JDK \u7684\u6027\u80FD\u666E\u904D\u6BD4 32 \u4F4D JDK \u4F4E\uFF1B</li><li>\u9700\u8981\u4FDD\u8BC1\u7A0B\u5E8F\u8DB3\u591F\u7A33\u5B9A\uFF0C\u56E0\u4E3A\u8FD9\u79CD\u5E94\u7528\u8981\u662F\u4EA7\u751F\u5806\u6EA2\u51FA\u51E0\u4E4E\u5C31\u65E0\u6CD5\u4EA7\u751F\u5806\u8F6C\u50A8\u5FEB\u7167\uFF08\u56E0\u4E3A\u8981\u4EA7\u751F\u8D85\u8FC7 10GB \u7684 Dump \u6587\u4EF6\uFF09\uFF0C\u54EA\u6015\u4EA7\u751F\u4E86\u5FEB\u7167\u4E5F\u51E0\u4E4E\u65E0\u6CD5\u8FDB\u884C\u5206\u6790\uFF1B</li><li>\u76F8\u540C\u7A0B\u5E8F\u5728 64 \u4F4D JDK \u6D88\u8017\u7684\u5185\u5B58\u4E00\u822C\u6BD4 32 \u4F4D JDK \u5927\uFF0C\u8FD9\u662F\u7531\u4E8E\u6307\u9488\u81A8\u80C0\uFF0C\u4EE5\u53CA\u6570\u636E\u7C7B\u578B\u5BF9\u9F50\u8865\u767D\u7B49\u56E0\u7D20\u5BFC\u81F4\u7684\u3002</li></ul><h2 id="\u4F7F\u7528-32-\u4F4D-jvm-\u5EFA\u7ACB\u903B\u8F91\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-32-\u4F4D-jvm-\u5EFA\u7ACB\u903B\u8F91\u96C6\u7FA4" aria-hidden="true">#</a> \u4F7F\u7528 32 \u4F4D JVM \u5EFA\u7ACB\u903B\u8F91\u96C6\u7FA4</h2><p>\u5728\u4E00\u53F0\u7269\u7406\u673A\u5668\u4E0A\u542F\u52A8\u591A\u4E2A\u5E94\u7528\u670D\u52A1\u5668\u8FDB\u7A0B\uFF0C\u6BCF\u4E2A\u670D\u52A1\u5668\u8FDB\u7A0B\u5206\u914D\u4E0D\u540C\u7AEF\u53E3\uFF0C \u7136\u540E\u5728\u524D\u7AEF\u642D\u5EFA\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u4EE5\u53CD\u5411\u4EE3\u7406\u7684\u65B9\u5F0F\u6765\u5206\u914D\u8BBF\u95EE\u8BF7\u6C42\u3002</p><p>\u8003\u8651\u5230\u5728\u4E00\u53F0\u7269\u7406\u673A\u5668\u4E0A\u5EFA\u7ACB\u903B\u8F91\u96C6\u7FA4\u7684\u76EE\u7684\u4EC5\u4EC5\u662F\u4E3A\u4E86\u5C3D\u53EF\u80FD\u5229\u7528\u786C\u4EF6\u8D44\u6E90\uFF0C\u5E76\u4E0D\u9700\u8981\u5173\u5FC3\u72B6\u6001\u4FDD\u7559\u3001\u70ED\u8F6C\u79FB\u4E4B\u7C7B\u7684\u9AD8\u53EF\u7528\u6027\u80FD\u9700\u6C42\uFF0C \u4E5F\u4E0D\u9700\u8981\u4FDD\u8BC1\u6BCF\u4E2A\u865A\u62DF\u673A\u8FDB\u7A0B\u6709\u7EDD\u5BF9\u7684\u5747\u8861\u8D1F\u8F7D\uFF0C\u56E0\u6B64\u4F7F\u7528\u65E0 Session \u590D\u5236\u7684\u4EB2\u5408\u5F0F\u96C6\u7FA4\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u3002 \u6211\u4EEC\u4EC5\u4EC5\u9700\u8981\u4FDD\u969C\u96C6\u7FA4\u5177\u5907\u4EB2\u5408\u6027\uFF0C\u4E5F\u5C31\u662F\u5747\u8861\u5668\u6309\u4E00\u5B9A\u7684\u89C4\u5219\u7B97\u6CD5\uFF08\u4E00\u822C\u6839\u636E SessionID \u5206\u914D\uFF09 \u5C06\u4E00\u4E2A\u56FA\u5B9A\u7684\u7528\u6237\u8BF7\u6C42\u6C38\u8FDC\u5206\u914D\u5230\u56FA\u5B9A\u7684\u4E00\u4E2A\u96C6\u7FA4\u8282\u70B9\u8FDB\u884C\u5904\u7406\u5373\u53EF\u3002</p><p>\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898\uFF1A</p><ul><li>\u5C3D\u91CF\u907F\u514D\u8282\u70B9\u7ADE\u4E89\u5168\u5C40\u8D44\u6E90\uFF0C\u5982\u78C1\u76D8\u7ADE\u4E89\uFF0C\u5404\u4E2A\u8282\u70B9\u5982\u679C\u540C\u65F6\u8BBF\u95EE\u67D0\u4E2A\u78C1\u76D8\u6587\u4EF6\u7684\u8BDD\uFF0C\u5F88\u53EF\u80FD\u5BFC\u81F4 IO \u5F02\u5E38\uFF1B</li><li>\u5F88\u96BE\u9AD8\u6548\u5229\u7528\u8D44\u6E90\u6C60\uFF0C\u5982\u8FDE\u63A5\u6C60\uFF0C\u4E00\u822C\u90FD\u662F\u5728\u8282\u70B9\u5EFA\u7ACB\u81EA\u5DF1\u72EC\u7ACB\u7684\u8FDE\u63A5\u6C60\uFF0C\u8FD9\u6837\u6709\u53EF\u80FD\u5BFC\u81F4\u4E00\u4E9B\u8282\u70B9\u6C60\u6EE1\u4E86\u800C\u53E6\u5916\u4E00\u4E9B\u8282\u70B9\u4ECD\u6709\u8F83\u591A\u7A7A\u4F59\uFF1B</li><li>\u5404\u4E2A\u8282\u70B9\u53D7\u5230 32 \u4F4D\u7684\u5185\u5B58\u9650\u5236\uFF1B</li><li>\u5927\u91CF\u4F7F\u7528\u672C\u5730\u7F13\u5B58\u7684\u5E94\u7528\uFF0C\u5728\u903B\u8F91\u96C6\u7FA4\u4E2D\u4F1A\u9020\u6210\u8F83\u5927\u7684\u5185\u5B58\u6D6A\u8D39\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u903B\u8F91\u8282\u70B9\u90FD\u6709\u4E00\u4EFD\u7F13\u5B58\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u8003\u8651\u628A\u672C\u5730\u7F13\u5B58\u6539\u6210\u96C6\u4E2D\u5F0F\u7F13\u5B58\u3002</li></ul><h2 id="\u8C03\u4F18\u6848\u4F8B\u5206\u6790\u4E0E\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#\u8C03\u4F18\u6848\u4F8B\u5206\u6790\u4E0E\u5B9E\u6218" aria-hidden="true">#</a> \u8C03\u4F18\u6848\u4F8B\u5206\u6790\u4E0E\u5B9E\u6218</h2><h3 id="\u573A\u666F\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F\u63CF\u8FF0" aria-hidden="true">#</a> \u573A\u666F\u63CF\u8FF0</h3><p>\u4E00\u4E2A\u5C0F\u578B\u7CFB\u7EDF\uFF0C\u4F7F\u7528 32 \u4F4D JDK\uFF0C4G \u5185\u5B58\uFF0C\u6D4B\u8BD5\u671F\u95F4\u53D1\u73B0\u670D\u52A1\u7AEF\u4E0D\u5B9A\u65F6\u629B\u51FA\u5185\u5B58\u6EA2\u51FA\u5F02\u5E38\u3002 \u52A0\u5165 -XX:+HeapDumpOnOutOfMemoryError\uFF08\u6DFB\u52A0\u8FD9\u4E2A\u53C2\u6570\u540E\uFF0C\u5806\u5185\u5B58\u6EA2\u51FA\u65F6\u5C31\u4F1A\u8F93\u51FA\u5F02\u5E38\u65E5\u5FD7\uFF09\uFF0C \u4F46\u518D\u6B21\u53D1\u751F\u5185\u5B58\u6EA2\u51FA\u65F6\uFF0C\u6CA1\u6709\u751F\u6210\u76F8\u5173\u5F02\u5E38\u65E5\u5FD7\u3002</p><h3 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h3><p>\u5728 32 \u4F4D JDK \u4E0A\uFF0C1.6G \u5206\u914D\u7ED9\u5806\uFF0C\u8FD8\u6709\u4E00\u90E8\u5206\u5206\u914D\u7ED9 JVM \u7684\u5176\u4ED6\u5185\u5B58\uFF0C\u76F4\u63A5\u5185\u5B58\u6700\u5927\u4E5F\u53EA\u80FD\u5728\u5269\u4F59\u7684 0.4G \u7A7A\u95F4\u4E2D\u5206\u51FA\u4E00\u90E8\u5206\uFF0C \u5982\u679C\u4F7F\u7528\u4E86 NIO\uFF0CJVM \u4F1A\u5728 JVM \u5185\u5B58\u4E4B\u5916\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u90A3\u4E48\u5C31\u8981\u5C0F\u5FC3\u201C\u76F4\u63A5\u5185\u5B58\u201D\u4E0D\u8DB3\u65F6\u53D1\u751F\u5185\u5B58\u6EA2\u51FA\u5F02\u5E38\u4E86\u3002</p><h3 id="\u76F4\u63A5\u5185\u5B58\u7684\u56DE\u6536\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u5185\u5B58\u7684\u56DE\u6536\u8FC7\u7A0B" aria-hidden="true">#</a> \u76F4\u63A5\u5185\u5B58\u7684\u56DE\u6536\u8FC7\u7A0B</h3><p>\u76F4\u63A5\u5185\u5B58\u867D\u7136\u4E0D\u662F JVM \u5185\u5B58\u7A7A\u95F4\uFF0C\u4F46\u5B83\u7684\u5783\u573E\u56DE\u6536\u4E5F\u7531 JVM \u8D1F\u8D23\u3002</p><p>\u5783\u573E\u6536\u96C6\u8FDB\u884C\u65F6\uFF0C\u865A\u62DF\u673A\u867D\u7136\u4F1A\u5BF9\u76F4\u63A5\u5185\u5B58\u8FDB\u884C\u56DE\u6536\uFF0C \u4F46\u662F\u76F4\u63A5\u5185\u5B58\u5374\u4E0D\u80FD\u50CF\u65B0\u751F\u4EE3\u3001\u8001\u5E74\u4EE3\u90A3\u6837\uFF0C\u53D1\u73B0\u7A7A\u95F4\u4E0D\u8DB3\u4E86\u5C31\u901A\u77E5\u6536\u96C6\u5668\u8FDB\u884C\u5783\u573E\u56DE\u6536\uFF0C \u5B83\u53EA\u80FD\u7B49\u8001\u5E74\u4EE3\u6EE1\u4E86\u540E Full GC\uFF0C\u7136\u540E\u201C\u987A\u4FBF\u201D\u5E2E\u5B83\u6E05\u7406\u6389\u5185\u5B58\u7684\u5E9F\u5F03\u5BF9\u8C61\u3002 \u5426\u5219\u53EA\u80FD\u4E00\u76F4\u7B49\u5230\u629B\u51FA\u5185\u5B58\u6EA2\u51FA\u5F02\u5E38\u65F6\uFF0C\u5148 catch \u6389\uFF0C\u518D\u5728 catch \u5757\u91CC\u5927\u558A \u201C<code>System.gc()</code>\u201D\u3002 \u8981\u662F\u865A\u62DF\u673A\u8FD8\u662F\u4E0D\u542C\uFF0C\u90A3\u5C31\u53EA\u80FD\u773C\u7741\u7741\u770B\u7740\u5806\u4E2D\u8FD8\u6709\u8BB8\u591A\u7A7A\u95F2\u5185\u5B58\uFF0C\u81EA\u5DF1\u5374\u4E0D\u5F97\u4E0D\u629B\u51FA\u5185\u5B58\u6EA2\u51FA\u5F02\u5E38\u4E86\u3002</p>',21);function h(d,l){return r}var c=a(i,[["render",h],["__file","06-jvm-performance-tuning.html.vue"]]);export{c as default};
