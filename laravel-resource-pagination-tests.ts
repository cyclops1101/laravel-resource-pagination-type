import { LaravelPaginatedResource, LaravelPaginationLinks, LaravelPaginationMeta } from ".";

describe("LaravelPaginatedResource", () => {
    it("should validate the structure of a paginated resource", () => {
        // Define a user type
        interface User {
            id: number;
            name: string;
        }
        // Define sample data
        const data: User[] = [
            { id: 1, name: "John" },
            { id: 2, name: "Jane" },
        ];
        const links: LaravelPaginationLinks = { first: "/first", last: "/last", prev: null, next: "/next" };
        const meta: LaravelPaginationMeta = {
            current_page: 1,
            from: 1,
            last_page: 2,
            path: "/path",
            per_page: 10,
            to: 2,
            total: 20,
            links: [
                { url: "/link1", label: "Link 1", active: true },
                { url: "/link2", label: "Link 2", active: false },
            ],
        };

        // Create a paginated resource
        const paginatedResource: LaravelPaginatedResource<User> = {
            data,
            links,
            meta,
        };

        // Assert that the paginated resource has the correct structure
        expect(paginatedResource).toEqual({
            data,
            links,
            meta,
        });
    });
});
