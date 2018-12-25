/* globals describe, beforeEach, it */
"use strict";

const identifierUtil = require("../lib/util/identifier");

describe("util/identifier", () => {
	describe("makePathsRelative", () => {
		describe("given a context and a pathConstruct", () => {
			it("computes the correct relative results for the path construct", () => {
				[
					[
						"/some/dir/",
						"/some/dir/to/somewhere|some/other/dir!../more/dir",
						"./to/somewhere|some/other/dir!../more/dir"
					],
					[
						"/dir/",
						"/dir/to/somewhere|some/other/dir!../more/dir",
						"./to/somewhere|some/other/dir!../more/dir"
					],
					[
						"/",
						"/dir/to/somewhere|some/other/dir!../more/dir",
						"./dir/to/somewhere|some/other/dir!../more/dir"
					],
					[
						"c:\\\\some\\dir\\",
						"c:\\\\some\\dir\\to\\somewhere|some/other/dir!../more/dir",
						"./to/somewhere|some/other/dir!../more/dir"
					],
					[
						"c:\\\\some\\dir\\",
						"C:\\\\some\\dir\\to\\somewhere|some/other/dir!../more/dir",
						"./to/somewhere|some/other/dir!../more/dir"
					]
				].forEach(([context, pathConstruct, expected]) => {
					
						expect(identifierUtil.makePathsRelative(context, pathConstruct)).toBe(
							expected
						);
				});
			});
		});
	});
});
