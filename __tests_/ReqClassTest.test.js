const getInfoTown = require('./ReqClassTest.js')
const townName = 'minsk'
test('the data is peanut butter', async () => {
  const { data } = await getInfoTown.getInfoByName(townName)
  expect(data.current.cloud).toBe(50)
})

test('the fetch fails with an error', async () => {
  try {
    return await getInfoTown.getInfoByName(townName).then((response) => {
      console.log('We got data: ' + response)
    })
  } catch (e) {
    console.log('in catch')
    expect(e).toMatch('error')
  }

  expect.assertions(1)
})
