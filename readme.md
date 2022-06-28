# rn-open-animate

minimalist react native animation plugin

## Installation

```
npm install rn-open-animate
```

## Usage

# quick start

```js
import Anim from 'rn-open-animate';

// ...
<Anim
  style={{
    opacity: 0,
    marginTop: 50
  }}
  to={{
    opacity: 1,
    marginTop: margin
  }}
  duration={500}
>
  // your child component
</Anim>
```

# with event
```
const [margin, setMargin] = React.useState(0)
return (
  <>
    <Anim
      style={{
        opacity: 0,
        marginTop: 50
      }}
      to={{
        opacity: 1,
        marginTop: margin
      }}
      duration={500}
    >
      <Text>...</Text>
    </Anim>
    <TouchableOpacity
      onPress={_ => setMargin(margin + 50)}
      style={{ width: 100, padding: 6, backgroundColor: 'red' }}>
      <Text>inc margin</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={_ => setMargin(margin - 50)}
      style={{ width: 100, padding: 6, backgroundColor: 'blue' }}>
      <Text>dec margin</Text>
    </TouchableOpacity>
  </>
)
```

## License
MIT
