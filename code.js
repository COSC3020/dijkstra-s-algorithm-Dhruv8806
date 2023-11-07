function dijkstra(graph, sourceNode, destinationNode) {
    const numNodes = graph.length;
    let dist = new Array(numNodes).fill(Infinity); // Initialize distances to "Infinity" for each vertex
    let marked = new Array(numNodes).fill(false); // Create an array to keep track of marked vertices

    dist[sourceNode] = 0; // Set the distance of the source node to 0

    while (!marked[destinationNode]) { // Continues until the destination node is marked
        let minDist = Infinity;
        let minVertex = null;

        // Finds the unmarked vertex with the lowest distance
        for (let vertex = 0; vertex < numNodes; vertex++) {
            if (!marked[vertex] && dist[vertex] < minDist) {
                minDist = dist[vertex];
                minVertex = vertex;
            }
        }

        if (minVertex === null) {
            break;
        }

        marked[minVertex] = true; // Mark the selected vertex as visited

        // Update distances for adjacent vertices
        for (let [adjacent, weight] of graph[minVertex]) {
            let newDist = dist[minVertex] + weight;
            if (newDist < dist[adjacent]) {
                dist[adjacent] = newDist;
            }
        }
    }

    return dist[destinationNode]; // Return the distance to the destination node
}




/*
Sources Used:
TA 
ChatGPT
https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e
*/


