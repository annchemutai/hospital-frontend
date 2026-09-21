<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters>
                    <v-carousel-item src="/images/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- About us -->
     <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align="center">
                    <v-card-title>Welcome to the Madaraka Hospital</v-card-title>
                    <v-card-text class="text-body-large"> Welcome to The Madaraka Hospital, where your health, dignity, and peace of mind are our highest priorities. Rooted in the spirit of independence and community empowerment, our state-of-the-art medical facility delivers compassionate, world-class healthcare tailored to you and your family. From cutting-edge diagnostics and 24/7 emergency response to specialized maternal and critical care, our dedicated team of medical professionals combines clinical excellence with advanced technology.</v-card-text>
                    <v-card-text class="text-body-large">At The Madaraka Hospital, we are committed to building a healthier, stronger future by putting patient-centered healing at the heart of everything we do.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- clinics -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/images/clinic1.jpg" cover></v-img>
                    <v-card-title> Laboratory Services</v-card-title>
                    <v-card-text>Some text about the lab</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/images/clinic2.jpg" cover></v-img>
                    <v-card-title> Maternity Services</v-card-title>
                    <v-card-text>Some text about the maternity</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/images/clinic3.jpg" cover></v-img>
                    <v-card-title> Physiotherapy Services</v-card-title>
                    <v-card-text>Some text about the Physiotherapy</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/images/clinic4.jpg" cover></v-img>
                    <v-card-title> Dental Services</v-card-title>
                    <v-card-text>Some text about the Dental</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- Footer -->
      <v-container max-width="100%" class="mt-16 bg-secondary" >
        <v-row>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Subscribe to our mailing list</v-card-title>
                    <v-card-text>Get the latest news, health tips, and hospital updates delivered to your inbox.</v-card-text>
                    <v-text-field v-model="inputValue" label="Email address" outlined class="ma-4" bg-color="white">
                        <template v-slot:append-inner>
                        <v-btn color="primary" > Subscribe </v-btn>
                        </template>
                    </v-text-field>
                    <div class="text-center mb-4">
                        <p>Follow us on:</p>
                        <v-icon icon="mdi-instagram"></v-icon>
                        <v-icon icon="mdi-twitter"></v-icon>
                        <v-icon icon="mdi-facebook"></v-icon>
                    </div>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title> Contact Information</v-card-title>
                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-map-marker-radius-outline"></v-icon>
                            The Madaraka Hospital
                        </p>
                        <p> 123, Main Street Madaraka, Nairobi </p>
                        <p>
                            <v-icon icon="mdi-phone-outline"></v-icon>
                            +254712345678
                        </p>
                        <p>
                            <v-icon icon="mdi-email-outline"></v-icon>
                            info@madarakahospital.com
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card height="300px" color="secondary" flat>
                    <v-card-title> Quick Links</v-card-title>
                    <v-card-text>About Us</v-card-text>
                    <v-card-text>Clinics</v-card-text>
                    <v-card-text>Find a Doctor</v-card-text>
                    <v-card-text>News and Events</v-card-text>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
</template>