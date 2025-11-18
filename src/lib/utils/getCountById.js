const getCountById = (items, idKey) =>
  items.reduce((counts, item) => {
    const id = item[idKey];
    if (!counts[id]) counts[id] = 0;
    counts[id] += 1;
    return counts;
  }, {});

export default getCountById;