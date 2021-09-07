function getStatusName(state: 'active') {
    console.log(state);
}
// solution 1.
// const state = 'active';
// getStatusName(state);

// solution 2
let state = 'test';
getStatusName(state as 'active');
