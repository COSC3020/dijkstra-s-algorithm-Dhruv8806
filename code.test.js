const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js').toString());


const testGraph1 = [
    // Node A connections: (B, 3)
    [[1, 3]],
    // Node B connections: (C, 4)
    [[2, 4]],
    // Node C connections: (D, 5)
    [[3, 5]],
    // Node D connections: (E, 6)
    [[4, 6]],
    // Node E connections: None
    []
];

const testGraph2 = [
    // Node A connections: (C, 5), (E, 8)
    [[2, 5], [4, 8]],
    // Node B connections: (C, 7), (D, 2)
    [[2, 7], [3, 2]],
    // Node C connections: (A, 5), (B, 7)
    [[0, 5], [1, 7]],
    // Node D connections: (E, 9), (B, 2)
    [[4, 9], [1, 2]],
    // Node E connections: (D, 9), (A, 8]
    [[3, 9], [0, 8]]
];

function validateShortestPath(source, graph, expectedResults) {
    const distances = dijkstra(graph, source);
    return JSON.stringify(distances) === JSON.stringify(expectedResults);
}

const Graphtest1 = jsc.forall(jsc.integer(0, 4), jsc.integer(0, 4), function (source, destination) {
    return validateShortestPath(source, destination, testGraph1, [0, 3, 7, 12, 18]);
});

const Graphtest2 = jsc.forall(jsc.integer(0, 4), jsc.integer(0, 4), function (source, destination) {
    return validateShortestPath(source, destination, testGraph2, [0, 8, 5, 7, 12]);
});

