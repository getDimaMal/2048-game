import Tile, { TileProps } from "./Tile";


const getProps = ({ ...props }: Partial<TileProps> = {}): TileProps => ({
    value: 1,
    ...props,
});

describe("Tile", () => {
    describe("render", () => {
        it("should render component", () => {
            const props = getProps();
            const tile = new Tile(props).render();

            expect(tile.tagName).toBe("DIV");
            expect(tile.innerText).toBe(String(props.value));
            expect(tile.classList.contains("tile")).toBe(true);
        });

        it("should render empty component", () => {
            const props = getProps({ value: 0 });
            const tile = new Tile(props).render();

            expect(tile.innerText).toBe("");
            expect(tile.classList.contains("empty")).toBe(true);
        });
    });

    describe("getValue", () => {
        it("should return current value", () => {
            const props = getProps();
            const tile = new Tile(props);

            expect(tile.getValue()).toBe(props.value);
        });
    });

    describe("slide", () => {
        it.each<"horizontal" | "vertical">(["horizontal", "vertical"])("should slide: %s", async (direction) => {
            const props = getProps();
            const tile = new Tile(props);

            const res = await tile.slide(direction, 1);

            expect(res).toBeNull();
            expect(tile.render().classList.contains("slide")).toBe(true);
        });
    });
});
