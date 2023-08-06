<Button
                    style={styles.Button}

                    onPress={() => login()}
                    title="LOGIN"
                    color='#007AFF'
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => navigation.navigate('SignUp')}
                    title="SIGN UP HERE "
                    color='red'
                    accessibilityLabel="Learn more about this purple button" r
                />



                <Button variant={"solid"} colorScheme ={"darkBlue"}size={50} px ={20} onPress={() => login()} _text={{color:"white",}}>
                    LOGIN
                </Button>