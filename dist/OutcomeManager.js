!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(1))},function(e,t,n){"use strict";function o(e,t,n){window.close()}function a(e,t,n){var o=e.attributes.AutoNavUrl||"";if(o&&o.length>0){window.open(o,"_self")}else alert("No AutoNavUrl specified in the outcome's attributes")}function r(e,t,n){var o=e.attributes.AutoOpenUrl||"";if(o&&o.length>0){window.open(o,"_blank")}else alert("No AutoOpenUrl specified in the outcome's attributes")}function u(e,t,n){window.print()}function c(e,t){if(manywho.OutcomeManager&&manywho.OutcomeManager.selectedOutcome&&manywho.OutcomeManager.selectedOutcome.attributes)for(var n in manywho.OutcomeManager.selectedOutcome.attributes)if(manywho.OutcomeManager.handlers[n]&&"true"===manywho.OutcomeManager.selectedOutcome.attributes[n]){manywho.OutcomeManager.handlers[n];manywho.OutcomeManager.handlers[n](manywho.OutcomeManager.selectedOutcome,e,manywho.OutcomeManager.originalRequest)}}function m(e,t){if(t){manywho.OutcomeManager.originalRequest=t,manywho.OutcomeManager.stateId=t.stateId;var n=t.mapElementInvokeRequest.selectedOutcomeId;if(manywho.OutcomeManager.tenantId&&manywho.OutcomeManager.stateId&&n){var o=manywho.OutcomeManager.tenantId+"___"+manywho.OutcomeManager.stateId;manywho.OutcomeManager.selectedOutcome=manywho.model.getOutcome(n,o)}}else manywho.OutcomeManager.originalRequest=null,manywho.OutcomeManager.stateId="",manywho.OutcomeManager.selectedOutcome=null}var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),l=manywho.utils.parseQueryString(window.location.search.substring(1)),h=l["tenant-id"];h||(h=window.location.pathname.split("/").filter(function(e){return e&&e.length>0})[0]),manywho.OutcomeManager={},manywho.OutcomeManager.tenantId=h,manywho.OutcomeManager.originalRequest,manywho.OutcomeManager.handlers={},manywho.OutcomeManager.handlers.AutoClose=o,manywho.OutcomeManager.handlers.AutoOpen=r,manywho.OutcomeManager.handlers.AutoNav=a,manywho.OutcomeManager.handlers.ForcePrint=u;for(var O in manywho.OutcomeHandlers)manywho.OutcomeManager.handlers[O]=manywho.OutcomeHandlers[O];manywho.CustomComponentOrchestrator?(manywho.CustomComponentOrchestrator.onBeforeSendHandlers.push(m),manywho.CustomComponentOrchestrator.doneSendHandlers.push(c)):manywho.settings.initialize({},{invoke:{beforeSend:m,done:c}});var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t}(s.Component);manywho.component.register("OutcomeManager",d),t.default=d},function(e,t){e.exports=React}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vT3V0Y29tZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGU1NzlkMDQyYjhjYmQwNjU5YzE0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL091dGNvbWVNYW5hZ2VyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIm1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJpbnN0YWxsZWRNb2R1bGVzIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJ2YWx1ZSIsIk9NYXV0b0Nsb3NlIiwib3V0Y29tZSIsInhociIsInJlcXVlc3QiLCJ3aW5kb3ciLCJjbG9zZSIsIk9NYXV0b05hdiIsInRhcmdldFVybCIsImF0dHJpYnV0ZXMiLCJBdXRvTmF2VXJsIiwibGVuZ3RoIiwib3BlbiIsImFsZXJ0IiwiT01hdXRvT3BlbiIsIkF1dG9PcGVuVXJsIiwiT01mb3JjZVByaW50IiwicHJpbnQiLCJPTWRvbmVIYW5kbGVyIiwibWFueXdobyIsIk91dGNvbWVNYW5hZ2VyIiwic2VsZWN0ZWRPdXRjb21lIiwia2V5IiwiaGFuZGxlcnMiLCJvcmlnaW5hbFJlcXVlc3QiLCJPTWJlZm9yZVNlbmRIYW5kbGVyIiwic3RhdGVJZCIsIm91dGNvbWVJZCIsIm1hcEVsZW1lbnRJbnZva2VSZXF1ZXN0Iiwic2VsZWN0ZWRPdXRjb21lSWQiLCJ0ZW5hbnRJZCIsImZsb3dLZXkiLCJtb2RlbCIsImdldE91dGNvbWUiLCJfX2V4dGVuZHMiLCJ0aGlzIiwiZXh0ZW5kU3RhdGljcyIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJiIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIlJlYWN0IiwicXVlcnlQYXJhbWV0ZXJzIiwidXRpbHMiLCJwYXJzZVF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJwYXRobmFtZSIsInNwbGl0IiwiZmlsdGVyIiwicGF0aCIsIk91dGNvbWVIYW5kbGVycyIsIkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvciIsIm9uQmVmb3JlU2VuZEhhbmRsZXJzIiwicHVzaCIsImRvbmVTZW5kSGFuZGxlcnMiLCJzZXR0aW5ncyIsImluaXRpYWxpemUiLCJpbnZva2UiLCJiZWZvcmVTZW5kIiwiZG9uZSIsIl9zdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVnaXN0ZXIiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiQ0FBUyxTQUFVQSxHQ0luQixRQUFBQyxHQUFBQyxHQUdBLEdBQUFDLEVBQUFELEdBQ0EsTUFBQUMsR0FBQUQsR0FBQUUsT0FHQSxJQUFBQyxHQUFBRixFQUFBRCxJQUNBSSxFQUFBSixFQUNBSyxHQUFBLEVBQ0FILFdBVUEsT0FOQUosR0FBQUUsR0FBQU0sS0FBQUgsRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUgsR0FHQUksRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQXZCQSxHQUFBRCxLQTRCQUYsR0FBQVEsRUFBQVQsRUFHQUMsRUFBQVMsRUFBQVAsRUFHQUYsRUFBQVUsRUFBQSxTQUFBUCxFQUFBUSxFQUFBQyxHQUNBWixFQUFBYSxFQUFBVixFQUFBUSxJQUNBRyxPQUFBQyxlQUFBWixFQUFBUSxHQUNBSyxjQUFBLEVBQ0FDLFlBQUEsRUFDQUMsSUFBQU4sS0FNQVosRUFBQW1CLEVBQUEsU0FBQWYsR0FDQSxHQUFBUSxHQUFBUixLQUFBZ0IsV0FDQSxXQUEyQixNQUFBaEIsR0FBQSxTQUMzQixXQUFpQyxNQUFBQSxHQUVqQyxPQURBSixHQUFBVSxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFaLEVBQUFhLEVBQUEsU0FBQVEsRUFBQUMsR0FBc0QsTUFBQVIsUUFBQVMsVUFBQUMsZUFBQWpCLEtBQUFjLEVBQUFDLElBR3REdEIsRUFBQXlCLEVBQUEsR0FHQXpCLElBQUEwQixFQUFBLEtETU0sU0FBVXRCLEVBQVFELEVBQVNILEdBRWpDLFlBS0FjLFFBQU9DLGVBQWVaLEVBQVMsY0FBZ0J3QixPQUFPLElBSHRELFNBQWtCbkIsR0FDZCxJQUFLLEdBQUlpQixLQUFLakIsR0FBUUwsRUFBUXFCLGVBQWVDLEtBQUl0QixFQUFRc0IsR0FBS2pCLEVBQUVpQixLRXhFcEV6QixFQUFBLEtGZ0ZNLFNBQVVJLEVBQVFELEVBQVNILEdBRWpDLFlHeEJBLFNBQUE0QixHQUFxQkMsRUFBZUMsRUFBV0MsR0FFM0NDLE9BQU9DLFFBSVgsUUFBQUMsR0FBbUJMLEVBQWVDLEVBQVdDLEdBRXpDLEdBQUlJLEdBQVlOLEVBQVFPLFdBQVdDLFlBQWMsRUFFakQsSUFBR0YsR0FBYUEsRUFBVUcsT0FBUyxFQUUvQixDQUFVTixPQUFPTyxLQUFLSixFQUFXLGFBSWpDSyxPQUFNLHVEQU1kLFFBQUFDLEdBQW9CWixFQUFlQyxFQUFXQyxHQUcxQyxHQUFJSSxHQUFZTixFQUFRTyxXQUFXTSxhQUFlLEVBRWxELElBQUdQLEdBQWFBLEVBQVVHLE9BQVMsRUFFL0IsQ0FBVU4sT0FBT08sS0FBS0osRUFBVyxjQUlqQ0ssT0FBTSx3REErQmQsUUFBQUcsR0FBc0JkLEVBQWVDLEVBQVdDLEdBRTVDQyxPQUFPWSxRQUlYLFFBQUFDLEdBQXVCZixFQUFXQyxHQUc5QixHQUFJZSxRQUFRQyxnQkFBa0JELFFBQVFDLGVBQWVDLGlCQUFtQkYsUUFBUUMsZUFBZUMsZ0JBQWdCWixXQUkzRyxJQUFLLEdBQUlhLEtBQU9ILFNBQVFDLGVBQWVDLGdCQUFnQlosV0FFbkQsR0FBR1UsUUFBUUMsZUFBZUcsU0FBU0QsSUFBbUUsU0FBM0RILFFBQVFDLGVBQWVDLGdCQUFnQlosV0FBV2EsR0FDN0YsQ0FDdUJILFFBQVFDLGVBQWVHLFNBQVNELEVBQ25ESCxTQUFRQyxlQUFlRyxTQUFTRCxHQUFLSCxRQUFRQyxlQUFlQyxnQkFBaUJsQixFQUFLZ0IsUUFBUUMsZUFBZUksa0JBUXpILFFBQUFDLEdBQTZCdEIsRUFBVUMsR0FFbkMsR0FBR0EsRUFDSCxDQUNJZSxRQUFRQyxlQUFlSSxnQkFBbUJwQixFQUMxQ2UsUUFBUUMsZUFBZU0sUUFBVXRCLEVBQVFzQixPQUN6QyxJQUFJQyxHQUFZdkIsRUFBUXdCLHdCQUF3QkMsaUJBQ2hELElBQUdWLFFBQVFDLGVBQWVVLFVBQVlYLFFBQVFDLGVBQWVNLFNBQVdDLEVBQ3hFLENBQ0ksR0FBSUksR0FBVVosUUFBUUMsZUFBZVUsU0FBVyxNQUFRWCxRQUFRQyxlQUFlTSxPQUMvRVAsU0FBUUMsZUFBZUMsZ0JBQWtCRixRQUFRYSxNQUFNQyxXQUFZTixFQUFjSSxRQUtyRlosU0FBUUMsZUFBZUksZ0JBQW1CLEtBQzFDTCxRQUFRQyxlQUFlTSxRQUFVLEdBQ2pDUCxRQUFRQyxlQUFlQyxnQkFBa0IsS0hqRmpELEdBQUlhLEdBQWFDLE1BQVFBLEtBQUtELFdBQWMsV0FDeEMsR0FBSUUsR0FBZ0JqRCxPQUFPa0QsaUJBQ3BCQyx1QkFBMkJDLFFBQVMsU0FBVXhELEVBQUd5RCxHQUFLekQsRUFBRXVELFVBQVlFLElBQ3ZFLFNBQVV6RCxFQUFHeUQsR0FBSyxJQUFLLEdBQUkxQyxLQUFLMEMsR0FBT0EsRUFBRTNDLGVBQWVDLEtBQUlmLEVBQUVlLEdBQUswQyxFQUFFMUMsSUFDekUsT0FBTyxVQUFVZixFQUFHeUQsR0FFaEIsUUFBU0MsS0FBT04sS0FBS08sWUFBYzNELEVBRG5DcUQsRUFBY3JELEVBQUd5RCxHQUVqQnpELEVBQUVhLFVBQWtCLE9BQU40QyxFQUFhckQsT0FBT3dELE9BQU9ILElBQU1DLEVBQUc3QyxVQUFZNEMsRUFBRTVDLFVBQVcsR0FBSTZDLE9BR3ZGdEQsUUFBT0MsZUFBZVosRUFBUyxjQUFnQndCLE9BQU8sR0c1RnRELElBQUE0QyxHQUFBdkUsRUFBQSxHQUdJd0UsRUFBa0IxQixRQUFRMkIsTUFBTUMsaUJBQWlCMUMsT0FBTzJDLFNBQVNDLE9BQU9DLFVBQVUsSUFDbEZwQixFQUFXZSxFQUFnQixZQUMxQmYsS0FFREEsRUFBV3pCLE9BQU8yQyxTQUFTRyxTQUNkQyxNQUFNLEtBQ05DLE9BQU8sU0FBVUMsR0FFZCxNQUFPQSxJQUFRQSxFQUFLM0MsT0FBUyxJQUM5QixJQUtuQlEsUUFBUUMsa0JBQ1JELFFBQVFDLGVBQWVVLFNBQVlBLEVBQ25DWCxRQUFRQyxlQUFlSSxnQkFDdkJMLFFBQVFDLGVBQWVHLFlBQ3ZCSixRQUFRQyxlQUFlRyxTQUFvQixVQUFJdEIsRUFDL0NrQixRQUFRQyxlQUFlRyxTQUFtQixTQUFJVCxFQUM5Q0ssUUFBUUMsZUFBZUcsU0FBa0IsUUFBSWhCLEVBQzdDWSxRQUFRQyxlQUFlRyxTQUFxQixXQUFJUCxDQUdoRCxLQUFJLEdBQUlNLEtBQU9ILFNBQVFvQyxnQkFFbkJwQyxRQUFRQyxlQUFlRyxTQUFTRCxHQUFPSCxRQUFRb0MsZ0JBQWdCakMsRUFLaEVILFNBQVFxQyw2QkFFUHJDLFFBQVFxQyw0QkFBNEJDLHFCQUFxQkMsS0FBS2pDLEdBQzlETixRQUFRcUMsNEJBQTRCRyxpQkFBaUJELEtBQUt4QyxJQUkxREMsUUFBUXlDLFNBQVNDLGVBS1RDLFFBRUlDLFdBQVl0QyxFQUNadUMsS0FBTTlDLElBc0h0QixJQUFBRSxHQUFBLFNBQUE2QyxHQUFBLFFBQUE3QyxLSCtDUSxNQUFrQixRQUFYNkMsR0FBbUJBLEVBQU9DLE1BQU0vQixLQUFNZ0MsWUFBY2hDLEtHN0NuRSxNQUY2QkQsR0FBQWQsRUFBQTZDLEdBRTdCN0MsR0FGNkJ3QixFQUFNd0IsVUFJbkNqRCxTQUFRa0QsVUFBVUMsU0FBUyxpQkFBa0JsRCxHQUU3QzVDLEVBQUErRixRQUFlbkQsR0htRFQsU0FBVTNDLEVBQVFELEdJbE94QkMsRUFBQUQsUUFBQW9FIiwiZmlsZSI6Ik91dGNvbWVNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKTtcclxuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUmVhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xyXG52YXIgcXVlcnlQYXJhbWV0ZXJzID0gbWFueXdoby51dGlscy5wYXJzZVF1ZXJ5U3RyaW5nKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcclxudmFyIHRlbmFudElkID0gcXVlcnlQYXJhbWV0ZXJzWyd0ZW5hbnQtaWQnXTtcclxuaWYgKCF0ZW5hbnRJZCkge1xyXG4gICAgdGVuYW50SWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICByZXR1cm4gcGF0aCAmJiBwYXRoLmxlbmd0aCA+IDA7XHJcbiAgICB9KVswXTtcclxufVxyXG4vL2RlY2xhcmUgZ2xvYmFsIHsgaW50ZXJmYWNlIFdpbmRvdyB7T3V0Y29tZU1hbmFnZXI6IGFueTt9fVxyXG5tYW55d2hvLk91dGNvbWVNYW5hZ2VyID0ge307XHJcbm1hbnl3aG8uT3V0Y29tZU1hbmFnZXIudGVuYW50SWQgPSB0ZW5hbnRJZDtcclxubWFueXdoby5PdXRjb21lTWFuYWdlci5vcmlnaW5hbFJlcXVlc3Q7XHJcbm1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuaGFuZGxlcnMgPSB7fTtcclxubWFueXdoby5PdXRjb21lTWFuYWdlci5oYW5kbGVyc1tcIkF1dG9DbG9zZVwiXSA9IE9NYXV0b0Nsb3NlO1xyXG5tYW55d2hvLk91dGNvbWVNYW5hZ2VyLmhhbmRsZXJzW1wiQXV0b09wZW5cIl0gPSBPTWF1dG9PcGVuO1xyXG5tYW55d2hvLk91dGNvbWVNYW5hZ2VyLmhhbmRsZXJzW1wiQXV0b05hdlwiXSA9IE9NYXV0b05hdjtcclxubWFueXdoby5PdXRjb21lTWFuYWdlci5oYW5kbGVyc1tcIkZvcmNlUHJpbnRcIl0gPSBPTWZvcmNlUHJpbnQ7XHJcbmZvciAodmFyIGtleSBpbiBtYW55d2hvLk91dGNvbWVIYW5kbGVycykge1xyXG4gICAgbWFueXdoby5PdXRjb21lTWFuYWdlci5oYW5kbGVyc1trZXldID0gbWFueXdoby5PdXRjb21lSGFuZGxlcnNba2V5XTtcclxufVxyXG4vLyB0aGlzIGF0dGFjaGVzIHRoZSBBamF4IGhhbmRsZXJzIHRvIHRoZSBtYW55d2hvLkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvciBvciBcclxuLy8gaW5pdGlhbGl6ZSBmdW5jdGlvbiBpZiBtYW55d2hvLkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvciBpc250IGRlZmluZWQuICBcclxuaWYgKG1hbnl3aG8uQ3VzdG9tQ29tcG9uZW50T3JjaGVzdHJhdG9yKSB7XHJcbiAgICBtYW55d2hvLkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvci5vbkJlZm9yZVNlbmRIYW5kbGVycy5wdXNoKE9NYmVmb3JlU2VuZEhhbmRsZXIpO1xyXG4gICAgbWFueXdoby5DdXN0b21Db21wb25lbnRPcmNoZXN0cmF0b3IuZG9uZVNlbmRIYW5kbGVycy5wdXNoKE9NZG9uZUhhbmRsZXIpO1xyXG59XHJcbmVsc2Uge1xyXG4gICAgbWFueXdoby5zZXR0aW5ncy5pbml0aWFsaXplKHt9LCB7XHJcbiAgICAgICAgaW52b2tlOiB7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IE9NYmVmb3JlU2VuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgIGRvbmU6IE9NZG9uZUhhbmRsZXJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBPTWF1dG9DbG9zZShvdXRjb21lLCB4aHIsIHJlcXVlc3QpIHtcclxuICAgIHdpbmRvdy5jbG9zZSgpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIE9NYXV0b05hdihvdXRjb21lLCB4aHIsIHJlcXVlc3QpIHtcclxuICAgIHZhciB0YXJnZXRVcmwgPSBvdXRjb21lLmF0dHJpYnV0ZXMuQXV0b05hdlVybCB8fCBcIlwiO1xyXG4gICAgaWYgKHRhcmdldFVybCAmJiB0YXJnZXRVcmwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZhciB3bmQgPSB3aW5kb3cub3Blbih0YXJnZXRVcmwsIFwiX3NlbGZcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhbGVydChcIk5vIEF1dG9OYXZVcmwgc3BlY2lmaWVkIGluIHRoZSBvdXRjb21lJ3MgYXR0cmlidXRlc1wiKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBPTWF1dG9PcGVuKG91dGNvbWUsIHhociwgcmVxdWVzdCkge1xyXG4gICAgdmFyIHRhcmdldFVybCA9IG91dGNvbWUuYXR0cmlidXRlcy5BdXRvT3BlblVybCB8fCBcIlwiO1xyXG4gICAgaWYgKHRhcmdldFVybCAmJiB0YXJnZXRVcmwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZhciB3bmQgPSB3aW5kb3cub3Blbih0YXJnZXRVcmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJObyBBdXRvT3BlblVybCBzcGVjaWZpZWQgaW4gdGhlIG91dGNvbWUncyBhdHRyaWJ1dGVzXCIpO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgIC8vdGhlIG91dGNvbWUncyAucGFnZU9iamVjdEJpbmRpbmdJZCB0ZWxscyB1cyB3aGljaCBjb21wb25lbnQgdHJpZ2dlcmVkIHRoZSBvdXRjb21lIGFuZCBpbnNlcnRlZCB0aGUgZGF0YVxyXG4gICAgdmFyIHRyaWdnZXJDb21wb25lbnQ9b3V0Y29tZS5wYWdlT2JqZWN0QmluZGluZ0lkO1xyXG5cclxuICAgIC8vZ2V0IHRoZSByZXNwb25zZSBmb3IgdGhlIGNvcnJlY3QgY29tcG9uZW50XHJcbiAgICB2YXIgcmVzcG9uc2UgOiBhbnk7XHJcbiAgICBmb3IodmFyIHBvcyA9IDAgOyBwb3MgPCByZXF1ZXN0Lm1hcEVsZW1lbnRJbnZva2VSZXF1ZXN0LnBhZ2VSZXF1ZXN0LnBhZ2VDb21wb25lbnRJbnB1dFJlc3BvbnNlcy5sZW5ndGggOyBwb3MrKylcclxuICAgIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHJlcXVlc3QubWFwRWxlbWVudEludm9rZVJlcXVlc3QucGFnZVJlcXVlc3QucGFnZUNvbXBvbmVudElucHV0UmVzcG9uc2VzW3Bvc107XHJcbiAgICAgICAgaWYoaXRlbS5wYWdlQ29tcG9uZW50SWQgPT09IHRyaWdnZXJDb21wb25lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihyZXNwb25zZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgdGFyZ2V0VXJpID0gcmVzcG9uc2UuY29udGVudFZhbHVlO1xyXG4gICAgICAgIHZhciB3bmQgPSB3aW5kb3cub3Blbih0YXJnZXRVcmksIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGFsZXJ0KFwiZmFpbGVkIHRvIGdldCB1cmkgLSBwYWdlT2JqZWN0QmluZGluZ0lkIG5vdCBmb3VuZCBpbiBwYWdlQ29tcG9uZW50SW5wdXRSZXNwb25zZXNcIik7XHJcbiAgICB9XHJcbiAgICAqL1xyXG59XHJcbmZ1bmN0aW9uIE9NZm9yY2VQcmludChvdXRjb21lLCB4aHIsIHJlcXVlc3QpIHtcclxuICAgIHdpbmRvdy5wcmludCgpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIE9NZG9uZUhhbmRsZXIoeGhyLCByZXF1ZXN0KSB7XHJcbiAgICAvL2NoZWNrIGNsb3NlIGZsYWcgYW5kIGlmIHNldCBqdXN0IGtpbGwgdGhlIHdpbmRvd1xyXG4gICAgaWYgKG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIgJiYgbWFueXdoby5PdXRjb21lTWFuYWdlci5zZWxlY3RlZE91dGNvbWUgJiYgbWFueXdoby5PdXRjb21lTWFuYWdlci5zZWxlY3RlZE91dGNvbWUuYXR0cmlidXRlcykge1xyXG4gICAgICAgIC8vbG9vcCBvdmVyIGVhY2ggb3V0Y29tZSBhbmQgY2FsbCBpdHMgYXNzb2NpYXRlZCBoYW5kbGVyIGluIHRoZSBwbGF5ZXIgaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgLy9zb21lIGRlZmF1bHQgY29tbW9uIG9uZXMgd2lsbCBkZWZhdWx0IHRvIHRoZSBoYW5kbGVycyBpbiAgaGVyZSBpZiBub3QuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuc2VsZWN0ZWRPdXRjb21lLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuaGFuZGxlcnNba2V5XSAmJiBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLnNlbGVjdGVkT3V0Y29tZS5hdHRyaWJ1dGVzW2tleV0gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gbWFueXdoby5PdXRjb21lTWFuYWdlci5oYW5kbGVyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgbWFueXdoby5PdXRjb21lTWFuYWdlci5oYW5kbGVyc1trZXldKG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuc2VsZWN0ZWRPdXRjb21lLCB4aHIsIG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIub3JpZ2luYWxSZXF1ZXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL3RoaXMgc2F2ZXMgdGhlIGxhc3Qgc2VsZWN0ZWQgb3V0Y29tZSBpbiB0aGUgT3V0Y29tZU1hbmFnZXIgICAgICAgICAgIFxyXG5mdW5jdGlvbiBPTWJlZm9yZVNlbmRIYW5kbGVyKHhociwgcmVxdWVzdCkge1xyXG4gICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgICBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLm9yaWdpbmFsUmVxdWVzdCA9IHJlcXVlc3Q7XHJcbiAgICAgICAgbWFueXdoby5PdXRjb21lTWFuYWdlci5zdGF0ZUlkID0gcmVxdWVzdC5zdGF0ZUlkO1xyXG4gICAgICAgIHZhciBvdXRjb21lSWQgPSByZXF1ZXN0Lm1hcEVsZW1lbnRJbnZva2VSZXF1ZXN0LnNlbGVjdGVkT3V0Y29tZUlkO1xyXG4gICAgICAgIGlmIChtYW55d2hvLk91dGNvbWVNYW5hZ2VyLnRlbmFudElkICYmIG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuc3RhdGVJZCAmJiBvdXRjb21lSWQpIHtcclxuICAgICAgICAgICAgdmFyIGZsb3dLZXkgPSBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLnRlbmFudElkICsgXCJfX19cIiArIG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuc3RhdGVJZDtcclxuICAgICAgICAgICAgbWFueXdoby5PdXRjb21lTWFuYWdlci5zZWxlY3RlZE91dGNvbWUgPSBtYW55d2hvLm1vZGVsLmdldE91dGNvbWUob3V0Y29tZUlkLCBmbG93S2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLm9yaWdpbmFsUmVxdWVzdCA9IG51bGw7XHJcbiAgICAgICAgbWFueXdoby5PdXRjb21lTWFuYWdlci5zdGF0ZUlkID0gXCJcIjtcclxuICAgICAgICBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLnNlbGVjdGVkT3V0Y29tZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxudmFyIE91dGNvbWVNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE91dGNvbWVNYW5hZ2VyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gT3V0Y29tZU1hbmFnZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE91dGNvbWVNYW5hZ2VyO1xyXG59KFJlYWN0LkNvbXBvbmVudCkpO1xyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignT3V0Y29tZU1hbmFnZXInLCBPdXRjb21lTWFuYWdlcik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE91dGNvbWVNYW5hZ2VyO1xyXG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gT3V0Y29tZU1hbmFnZXIuanMiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNTc5ZDA0MmI4Y2JkMDY1OWMxNCIsImV4cG9ydCAqIGZyb20gJy4vT3V0Y29tZU1hbmFnZXInO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbnZhciBxdWVyeVBhcmFtZXRlcnMgPSBtYW55d2hvLnV0aWxzLnBhcnNlUXVlcnlTdHJpbmcod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xyXG52YXIgdGVuYW50SWQgPSBxdWVyeVBhcmFtZXRlcnNbJ3RlbmFudC1pZCddO1xyXG5pZiAoIXRlbmFudElkKSBcclxue1xyXG4gICAgdGVuYW50SWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICAgICAgICAgIC5zcGxpdCgnLycpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChwYXRoKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0aCAmJiBwYXRoLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgICAgICB9KVswXTtcclxufVxyXG4gICAgXHJcblxyXG4vL2RlY2xhcmUgZ2xvYmFsIHsgaW50ZXJmYWNlIFdpbmRvdyB7T3V0Y29tZU1hbmFnZXI6IGFueTt9fVxyXG5tYW55d2hvLk91dGNvbWVNYW5hZ2VyID0ge307XHJcbm1hbnl3aG8uT3V0Y29tZU1hbmFnZXIudGVuYW50SWQgID0gdGVuYW50SWQ7XHJcbm1hbnl3aG8uT3V0Y29tZU1hbmFnZXIub3JpZ2luYWxSZXF1ZXN0O1xyXG5tYW55d2hvLk91dGNvbWVNYW5hZ2VyLmhhbmRsZXJzID0ge307XHJcbm1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuaGFuZGxlcnNbXCJBdXRvQ2xvc2VcIl0gPSBPTWF1dG9DbG9zZTtcclxubWFueXdoby5PdXRjb21lTWFuYWdlci5oYW5kbGVyc1tcIkF1dG9PcGVuXCJdID0gT01hdXRvT3BlbjtcclxubWFueXdoby5PdXRjb21lTWFuYWdlci5oYW5kbGVyc1tcIkF1dG9OYXZcIl0gPSBPTWF1dG9OYXY7XHJcbm1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuaGFuZGxlcnNbXCJGb3JjZVByaW50XCJdID0gT01mb3JjZVByaW50O1xyXG5cclxuXHJcbmZvcih2YXIga2V5IGluIG1hbnl3aG8uT3V0Y29tZUhhbmRsZXJzKVxyXG57XHJcbiAgICBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLmhhbmRsZXJzW2tleV0gPSBtYW55d2hvLk91dGNvbWVIYW5kbGVyc1trZXldO1xyXG59XHJcbiAgICBcclxuLy8gdGhpcyBhdHRhY2hlcyB0aGUgQWpheCBoYW5kbGVycyB0byB0aGUgbWFueXdoby5DdXN0b21Db21wb25lbnRPcmNoZXN0cmF0b3Igb3IgXHJcbi8vIGluaXRpYWxpemUgZnVuY3Rpb24gaWYgbWFueXdoby5DdXN0b21Db21wb25lbnRPcmNoZXN0cmF0b3IgaXNudCBkZWZpbmVkLiAgXHJcbmlmKG1hbnl3aG8uQ3VzdG9tQ29tcG9uZW50T3JjaGVzdHJhdG9yKVxyXG57XHJcbiAgICBtYW55d2hvLkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvci5vbkJlZm9yZVNlbmRIYW5kbGVycy5wdXNoKE9NYmVmb3JlU2VuZEhhbmRsZXIpO1xyXG4gICAgbWFueXdoby5DdXN0b21Db21wb25lbnRPcmNoZXN0cmF0b3IuZG9uZVNlbmRIYW5kbGVycy5wdXNoKE9NZG9uZUhhbmRsZXIpO1xyXG59XHJcbmVsc2Vcclxue1xyXG4gICAgbWFueXdoby5zZXR0aW5ncy5pbml0aWFsaXplKFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW52b2tlOiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogT01iZWZvcmVTZW5kSGFuZGxlcixcclxuICAgICAgICAgICAgICAgIGRvbmU6IE9NZG9uZUhhbmRsZXIgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gT01hdXRvQ2xvc2Uob3V0Y29tZSA6IGFueSwgeGhyIDogYW55LCByZXF1ZXN0OiBhbnkpXHJcbntcclxuICAgIHdpbmRvdy5jbG9zZSgpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBPTWF1dG9OYXYob3V0Y29tZSA6IGFueSwgeGhyIDogYW55LCByZXF1ZXN0OiBhbnkpXHJcbntcclxuICAgIHZhciB0YXJnZXRVcmwgPSBvdXRjb21lLmF0dHJpYnV0ZXMuQXV0b05hdlVybCB8fCBcIlwiO1xyXG5cclxuICAgIGlmKHRhcmdldFVybCAmJiB0YXJnZXRVcmwubGVuZ3RoID4gMClcclxuICAgIHtcclxuICAgICAgICB2YXIgd25kID0gd2luZG93Lm9wZW4odGFyZ2V0VXJsLCBcIl9zZWxmXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGFsZXJ0KFwiTm8gQXV0b05hdlVybCBzcGVjaWZpZWQgaW4gdGhlIG91dGNvbWUncyBhdHRyaWJ1dGVzXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE9NYXV0b09wZW4ob3V0Y29tZSA6IGFueSwgeGhyIDogYW55LCByZXF1ZXN0OiBhbnkpXHJcbntcclxuXHJcbiAgICB2YXIgdGFyZ2V0VXJsID0gb3V0Y29tZS5hdHRyaWJ1dGVzLkF1dG9PcGVuVXJsIHx8IFwiXCI7XHJcblxyXG4gICAgaWYodGFyZ2V0VXJsICYmIHRhcmdldFVybC5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB3bmQgPSB3aW5kb3cub3Blbih0YXJnZXRVcmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGFsZXJ0KFwiTm8gQXV0b09wZW5Vcmwgc3BlY2lmaWVkIGluIHRoZSBvdXRjb21lJ3MgYXR0cmlidXRlc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgLy90aGUgb3V0Y29tZSdzIC5wYWdlT2JqZWN0QmluZGluZ0lkIHRlbGxzIHVzIHdoaWNoIGNvbXBvbmVudCB0cmlnZ2VyZWQgdGhlIG91dGNvbWUgYW5kIGluc2VydGVkIHRoZSBkYXRhXHJcbiAgICB2YXIgdHJpZ2dlckNvbXBvbmVudD1vdXRjb21lLnBhZ2VPYmplY3RCaW5kaW5nSWQ7XHJcblxyXG4gICAgLy9nZXQgdGhlIHJlc3BvbnNlIGZvciB0aGUgY29ycmVjdCBjb21wb25lbnRcclxuICAgIHZhciByZXNwb25zZSA6IGFueTtcclxuICAgIGZvcih2YXIgcG9zID0gMCA7IHBvcyA8IHJlcXVlc3QubWFwRWxlbWVudEludm9rZVJlcXVlc3QucGFnZVJlcXVlc3QucGFnZUNvbXBvbmVudElucHV0UmVzcG9uc2VzLmxlbmd0aCA7IHBvcysrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBpdGVtID0gcmVxdWVzdC5tYXBFbGVtZW50SW52b2tlUmVxdWVzdC5wYWdlUmVxdWVzdC5wYWdlQ29tcG9uZW50SW5wdXRSZXNwb25zZXNbcG9zXTtcclxuICAgICAgICBpZihpdGVtLnBhZ2VDb21wb25lbnRJZCA9PT0gdHJpZ2dlckNvbXBvbmVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gaXRlbTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHJlc3BvbnNlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0YXJnZXRVcmkgPSByZXNwb25zZS5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgdmFyIHduZCA9IHdpbmRvdy5vcGVuKHRhcmdldFVyaSwgXCJfYmxhbmtcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgYWxlcnQoXCJmYWlsZWQgdG8gZ2V0IHVyaSAtIHBhZ2VPYmplY3RCaW5kaW5nSWQgbm90IGZvdW5kIGluIHBhZ2VDb21wb25lbnRJbnB1dFJlc3BvbnNlc1wiKTtcclxuICAgIH1cclxuICAgICovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE9NZm9yY2VQcmludChvdXRjb21lIDogYW55LCB4aHIgOiBhbnksIHJlcXVlc3Q6IGFueSlcclxue1xyXG4gICAgd2luZG93LnByaW50KCk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuICAgIFxyXG5mdW5jdGlvbiBPTWRvbmVIYW5kbGVyKHhocjogYW55ICwgcmVxdWVzdDogYW55KVxyXG57XHJcbiAgICAvL2NoZWNrIGNsb3NlIGZsYWcgYW5kIGlmIHNldCBqdXN0IGtpbGwgdGhlIHdpbmRvd1xyXG4gICAgaWYoIG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIgJiYgbWFueXdoby5PdXRjb21lTWFuYWdlci5zZWxlY3RlZE91dGNvbWUgJiYgbWFueXdoby5PdXRjb21lTWFuYWdlci5zZWxlY3RlZE91dGNvbWUuYXR0cmlidXRlcyApXHJcbiAgICB7XHJcbiAgICAgICAgLy9sb29wIG92ZXIgZWFjaCBvdXRjb21lIGFuZCBjYWxsIGl0cyBhc3NvY2lhdGVkIGhhbmRsZXIgaW4gdGhlIHBsYXllciBpZiBpdCBleGlzdHNcclxuICAgICAgICAvL3NvbWUgZGVmYXVsdCBjb21tb24gb25lcyB3aWxsIGRlZmF1bHQgdG8gdGhlIGhhbmRsZXJzIGluICBoZXJlIGlmIG5vdC5cclxuICAgICAgICBmb3IoIHZhciBrZXkgaW4gbWFueXdoby5PdXRjb21lTWFuYWdlci5zZWxlY3RlZE91dGNvbWUuYXR0cmlidXRlcyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihtYW55d2hvLk91dGNvbWVNYW5hZ2VyLmhhbmRsZXJzW2tleV0gJiYgbWFueXdoby5PdXRjb21lTWFuYWdlci5zZWxlY3RlZE91dGNvbWUuYXR0cmlidXRlc1trZXldID09PSBcInRydWVcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuaGFuZGxlcnNba2V5XTtcclxuICAgICAgICAgICAgICAgIG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIuaGFuZGxlcnNba2V5XShtYW55d2hvLk91dGNvbWVNYW5hZ2VyLnNlbGVjdGVkT3V0Y29tZSwgeGhyLCBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLm9yaWdpbmFsUmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL3RoaXMgc2F2ZXMgdGhlIGxhc3Qgc2VsZWN0ZWQgb3V0Y29tZSBpbiB0aGUgT3V0Y29tZU1hbmFnZXIgICAgICAgICAgIFxyXG5mdW5jdGlvbiBPTWJlZm9yZVNlbmRIYW5kbGVyKHhocjogYW55LCByZXF1ZXN0OiBhbnkgKVxyXG57XHJcbiAgICBpZihyZXF1ZXN0KVxyXG4gICAge1xyXG4gICAgICAgIG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIub3JpZ2luYWxSZXF1ZXN0ICA9IHJlcXVlc3Q7XHJcbiAgICAgICAgbWFueXdoby5PdXRjb21lTWFuYWdlci5zdGF0ZUlkID0gcmVxdWVzdC5zdGF0ZUlkO1xyXG4gICAgICAgIHZhciBvdXRjb21lSWQgPSByZXF1ZXN0Lm1hcEVsZW1lbnRJbnZva2VSZXF1ZXN0LnNlbGVjdGVkT3V0Y29tZUlkO1xyXG4gICAgICAgIGlmKG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIudGVuYW50SWQgJiYgbWFueXdoby5PdXRjb21lTWFuYWdlci5zdGF0ZUlkICYmIG91dGNvbWVJZCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZmxvd0tleSA9IG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIudGVuYW50SWQgKyBcIl9fX1wiICsgbWFueXdoby5PdXRjb21lTWFuYWdlci5zdGF0ZUlkO1xyXG4gICAgICAgICAgICBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLnNlbGVjdGVkT3V0Y29tZSA9IG1hbnl3aG8ubW9kZWwuZ2V0T3V0Y29tZSggb3V0Y29tZUlkICAsICBmbG93S2V5ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIG1hbnl3aG8uT3V0Y29tZU1hbmFnZXIub3JpZ2luYWxSZXF1ZXN0ICA9IG51bGw7XHJcbiAgICAgICAgbWFueXdoby5PdXRjb21lTWFuYWdlci5zdGF0ZUlkID0gXCJcIjtcclxuICAgICAgICBtYW55d2hvLk91dGNvbWVNYW5hZ2VyLnNlbGVjdGVkT3V0Y29tZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE91dGNvbWVNYW5hZ2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxue1xyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignT3V0Y29tZU1hbmFnZXInLCBPdXRjb21lTWFuYWdlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXRjb21lTWFuYWdlcjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PdXRjb21lTWFuYWdlci50c3giLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9