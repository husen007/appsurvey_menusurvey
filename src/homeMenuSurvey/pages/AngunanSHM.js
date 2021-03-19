import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.image}>
          <View>
            <Avatar.Image
              size={90}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar4.png',
              }}
            />
          </View>
          <View style={{paddingLeft: 10, marginTop: 10}}>
            <Text>Untung Suropati</Text>
            <Text>jln gang senggol</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Nama :</Text>
            <TextInput
              placeholder="Nama"
              placeholderTextColor={'gray'}
              style={styles.txtInput}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Alamat :</Text>
            <TextInput
              placeholder="Alamat"
              placeholderTextColor={'gray'}
              style={styles.txtArea}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>No.KTP :</Text>
            <TextInput
              placeholder="Nomer KTP"
              placeholderTextColor={'gray'}
              keyboardType="number-pad"
              style={styles.txtArea}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>TTL :</Text>
            <TextInput
              placeholder="Tempat Tanggal Lahir"
              placeholderTextColor={'gray'}
              style={styles.txtArea}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Jenis Kelamin :</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Profesi :</Text>
            <TextInput
              placeholder="Profesi"
              placeholderTextColor={'gray'}
              style={styles.txtArea}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Nm.Ibu :</Text>
            <TextInput
              placeholder="Nama Ibu Kandung"
              placeholderTextColor={'gray'}
              style={styles.txtArea}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Status :</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>GPS :</Text>
            <TextInput
              placeholder="Location"
              placeholderTextColor={'gray'}
              style={styles.txtArea}
            />
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', paddingLeft: 30}}>
            <TouchableOpacity style={styles.button}>
              <Text>Agunan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Pendapatan</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 10, borderRadius: 5}}>
            <TouchableOpacity style={styles.button}>
              <Text>Foto KTP</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 20,
              borderRadius: 5,
            }}>
            <TouchableOpacity style={styles.button}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7cb342',
    paddingVertical: 8,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40,
    // width: 280,
    width: '68%',
    color: 'black',
    margin: 12,
    padding: 8,
  },
  txtArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '68%',
    color: 'black',
    margin: 12,
    padding: 8,
  },
  label: {
    fontSize: 16,
    paddingLeft: 15,
    // paddingRight: ,
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 150,
  },
});
