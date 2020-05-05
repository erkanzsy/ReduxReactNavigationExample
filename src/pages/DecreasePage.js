import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux'
import Counter from "../components/counter";

class DecreasePage extends React.Component {

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
        <Counter val={this.props.secretValue}/>
        <Button
          title="Decrease"
          color = "red"
          onPress={()=> {this.props.decrease()}}
        />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function mapStateToProps(state) {
  return {
    secretValue: state.secretValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    decrease: () => dispatch({ type: 'decrease' }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DecreasePage);
