PGDMP                         {            app_pos    15.0    15.2 J    W           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            X           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            Y           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Z           1262    35318    app_pos    DATABASE     �   CREATE DATABASE app_pos WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE app_pos;
                postgres    false            c           1247    36133    enum_orders_status    TYPE     a   CREATE TYPE public.enum_orders_status AS ENUM (
    'active',
    'inactive',
    'purchased'
);
 %   DROP TYPE public.enum_orders_status;
       public          postgres    false            �            1259    36110 
   categories    TABLE     �   CREATE TABLE public.categories (
    category_id integer NOT NULL,
    "categoryName" character varying(50) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    36109    categories_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categories_category_id_seq;
       public          postgres    false    221            [           0    0    categories_category_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categories_category_id_seq OWNED BY public.categories.category_id;
          public          postgres    false    220            �            1259    36095    clients    TABLE     �  CREATE TABLE public.clients (
    client_id integer NOT NULL,
    identification character varying(50) NOT NULL,
    client_name character varying(50) NOT NULL,
    direction character varying(255) NOT NULL,
    phone character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.clients;
       public         heap    postgres    false            �            1259    36094    clients_client_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.clients_client_id_seq;
       public          postgres    false    219            \           0    0    clients_client_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.clients_client_id_seq OWNED BY public.clients.client_id;
          public          postgres    false    218            �            1259    36175    invoices    TABLE     �  CREATE TABLE public.invoices (
    invoice_id integer NOT NULL,
    order_id integer,
    establishment character varying(50) NOT NULL,
    emission_point character varying(50) NOT NULL,
    subtotal numeric(10,2) NOT NULL,
    total_tax numeric(10,2) NOT NULL,
    total numeric(10,2) NOT NULL,
    date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.invoices;
       public         heap    postgres    false            �            1259    36174    invoices_invoice_id_seq    SEQUENCE     �   CREATE SEQUENCE public.invoices_invoice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.invoices_invoice_id_seq;
       public          postgres    false    229            ]           0    0    invoices_invoice_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.invoices_invoice_id_seq OWNED BY public.invoices.invoice_id;
          public          postgres    false    228            �            1259    36158    order_details    TABLE     �  CREATE TABLE public.order_details (
    order_detail_id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL,
    subtotal numeric(10,2) NOT NULL,
    total_tax numeric(10,2) NOT NULL,
    total numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public.order_details;
       public         heap    postgres    false            �            1259    36157 !   order_details_order_detail_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_details_order_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.order_details_order_detail_id_seq;
       public          postgres    false    227            ^           0    0 !   order_details_order_detail_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.order_details_order_detail_id_seq OWNED BY public.order_details.order_detail_id;
          public          postgres    false    226            �            1259    36140    orders    TABLE     E  CREATE TABLE public.orders (
    order_id integer NOT NULL,
    client_id integer,
    user_id integer,
    date timestamp with time zone,
    status public.enum_orders_status DEFAULT 'active'::public.enum_orders_status,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false    867    867            �            1259    36139    orders_order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_order_id_seq;
       public          postgres    false    225            _           0    0    orders_order_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;
          public          postgres    false    224            �            1259    36119    products    TABLE     �  CREATE TABLE public.products (
    product_id integer NOT NULL,
    category_id integer,
    "nameProduct" character varying(50) NOT NULL,
    code character varying(50) NOT NULL,
    emission_point character varying(255) NOT NULL,
    quantity smallint NOT NULL,
    unit_measure character varying(10) NOT NULL,
    price numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    36118    products_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_product_id_seq;
       public          postgres    false    223            `           0    0    products_product_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;
          public          postgres    false    222            �            1259    36072    roles    TABLE     �   CREATE TABLE public.roles (
    role_id integer NOT NULL,
    role_name character varying(30) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    36071    roles_role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.roles_role_id_seq;
       public          postgres    false    215            a           0    0    roles_role_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.roles_role_id_seq OWNED BY public.roles.role_id;
          public          postgres    false    214            �            1259    36081    users    TABLE       CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role_id integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    36080    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    217            b           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    216            �           2604    36113    categories category_id    DEFAULT     �   ALTER TABLE ONLY public.categories ALTER COLUMN category_id SET DEFAULT nextval('public.categories_category_id_seq'::regclass);
 E   ALTER TABLE public.categories ALTER COLUMN category_id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    36098    clients client_id    DEFAULT     v   ALTER TABLE ONLY public.clients ALTER COLUMN client_id SET DEFAULT nextval('public.clients_client_id_seq'::regclass);
 @   ALTER TABLE public.clients ALTER COLUMN client_id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    36178    invoices invoice_id    DEFAULT     z   ALTER TABLE ONLY public.invoices ALTER COLUMN invoice_id SET DEFAULT nextval('public.invoices_invoice_id_seq'::regclass);
 B   ALTER TABLE public.invoices ALTER COLUMN invoice_id DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    36161    order_details order_detail_id    DEFAULT     �   ALTER TABLE ONLY public.order_details ALTER COLUMN order_detail_id SET DEFAULT nextval('public.order_details_order_detail_id_seq'::regclass);
 L   ALTER TABLE public.order_details ALTER COLUMN order_detail_id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    36143    orders order_id    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN order_id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    36122    products product_id    DEFAULT     z   ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);
 B   ALTER TABLE public.products ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    36075    roles role_id    DEFAULT     n   ALTER TABLE ONLY public.roles ALTER COLUMN role_id SET DEFAULT nextval('public.roles_role_id_seq'::regclass);
 <   ALTER TABLE public.roles ALTER COLUMN role_id DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    36084    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    216    217    217            L          0    36110 
   categories 
   TABLE DATA           [   COPY public.categories (category_id, "categoryName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   �]       J          0    36095    clients 
   TABLE DATA           |   COPY public.clients (client_id, identification, client_name, direction, phone, email, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �]       T          0    36175    invoices 
   TABLE DATA           �   COPY public.invoices (invoice_id, order_id, establishment, emission_point, subtotal, total_tax, total, date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    229   q^       R          0    36158    order_details 
   TABLE DATA           �   COPY public.order_details (order_detail_id, order_id, product_id, quantity, price, subtotal, total_tax, total, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   �^       P          0    36140    orders 
   TABLE DATA           f   COPY public.orders (order_id, client_id, user_id, date, status, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   �_       N          0    36119    products 
   TABLE DATA           �   COPY public.products (product_id, category_id, "nameProduct", code, emission_point, quantity, unit_measure, price, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   �_       F          0    36072    roles 
   TABLE DATA           M   COPY public.roles (role_id, role_name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �`       H          0    36081    users 
   TABLE DATA           `   COPY public.users (user_id, user_name, password, role_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   a       c           0    0    categories_category_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.categories_category_id_seq', 2, true);
          public          postgres    false    220            d           0    0    clients_client_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.clients_client_id_seq', 2, true);
          public          postgres    false    218            e           0    0    invoices_invoice_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.invoices_invoice_id_seq', 6, true);
          public          postgres    false    228            f           0    0 !   order_details_order_detail_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.order_details_order_detail_id_seq', 42, true);
          public          postgres    false    226            g           0    0    orders_order_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orders_order_id_seq', 17, true);
          public          postgres    false    224            h           0    0    products_product_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.products_product_id_seq', 2, true);
          public          postgres    false    222            i           0    0    roles_role_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.roles_role_id_seq', 3, true);
          public          postgres    false    214            j           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 3, true);
          public          postgres    false    216            �           2606    36117 &   categories categories_categoryName_key 
   CONSTRAINT     m   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "categories_categoryName_key" UNIQUE ("categoryName");
 R   ALTER TABLE ONLY public.categories DROP CONSTRAINT "categories_categoryName_key";
       public            postgres    false    221            �           2606    36115    categories categories_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    221            �           2606    36108    clients clients_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_email_key;
       public            postgres    false    219            �           2606    36104 "   clients clients_identification_key 
   CONSTRAINT     g   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_identification_key UNIQUE (identification);
 L   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_identification_key;
       public            postgres    false    219            �           2606    36106    clients clients_phone_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_phone_key UNIQUE (phone);
 C   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_phone_key;
       public            postgres    false    219            �           2606    36102    clients clients_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (client_id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            postgres    false    219            �           2606    36180    invoices invoices_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.invoices
    ADD CONSTRAINT invoices_pkey PRIMARY KEY (invoice_id);
 @   ALTER TABLE ONLY public.invoices DROP CONSTRAINT invoices_pkey;
       public            postgres    false    229            �           2606    36163     order_details order_details_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (order_detail_id);
 J   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_pkey;
       public            postgres    false    227            �           2606    36146    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    225            �           2606    36126    products products_code_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_code_key UNIQUE (code);
 D   ALTER TABLE ONLY public.products DROP CONSTRAINT products_code_key;
       public            postgres    false    223            �           2606    36124    products products_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    223            �           2606    36077    roles roles_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    215            �           2606    36079    roles roles_role_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_role_name_key UNIQUE (role_name);
 C   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_role_name_key;
       public            postgres    false    215            �           2606    36088    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    217            �           2606    36181    invoices invoices_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.invoices
    ADD CONSTRAINT invoices_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public.invoices DROP CONSTRAINT invoices_order_id_fkey;
       public          postgres    false    225    3243    229            �           2606    36164 )   order_details order_details_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id) ON UPDATE CASCADE ON DELETE SET NULL;
 S   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_order_id_fkey;
       public          postgres    false    227    225    3243            �           2606    36169 +   order_details order_details_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_product_id_fkey;
       public          postgres    false    227    223    3241            �           2606    36147    orders orders_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.clients(client_id) ON UPDATE CASCADE ON DELETE SET NULL;
 F   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_client_id_fkey;
       public          postgres    false    3233    219    225            �           2606    36152    orders orders_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    3225    217    225            �           2606    36127 "   products products_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(category_id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public.products DROP CONSTRAINT products_category_id_fkey;
       public          postgres    false    221    223    3237            �           2606    36089    users users_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(role_id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_role_id_fkey;
       public          postgres    false    3221    217    215            L   <   x�3�	�4202�50�52P00�20�2��3
���2�pƔ56�3�Ī&����� q{      J   �   x�}�;
�0�zu
]�bw��U�6)r�4`c[���#\%�dʙ�G�5�[C.I^�#�p�E��L�X ��;k4��q��qZԘW`dݠm%r@4*r\�?�` ��:�vC��<�m��'+���a��߲	dTk��o��)!���:"      T   u   x���1�0g��@R���oȐt1�vJ�%������� R�p.̲��}��;�-,��b芀X~�m�O,����{ֆ@T��9&^.����t�Ag~|�G��nV��X�'}FU� SP3�      R   �   x����	�@���*ҀŌ��jq�ud�؆��I�4H0�&֤�% ��P�k�jbS<��f�*����]
�\e�8�C�X�;a5���~P���y����]���ÊD/�� N�~H��n�]r�O�E�      P   c   x����
�0C��+���6��[��
E���<�M�K�B�kP%�AR��jv����ܧu<��@Z-c˨�7R�ԱUB��9�xT�ɾ�K⻡�����&_      N   �   x�}��
�0E痯x?�p�dݢN.A$lm�3�u(���9�����g�})�;!�����<��>��dh�b;�N�� �N�v�����4̯1sl�ʧ;���}Nc]�f���Ʈ��j��6�      F   d   x�3�tL����,.)JL�/�4202�50�52P00�20�21�361
��2�K�KI�j������V�R\Ɯ���Ee�ŘF ����!6#���b���� �,�      H   �   x�}��n�@���p]�u≮̀��������

q�h��nL��49��]<GCY�����ꗋnN��9�Y��m���%�m���sf���-[{7���XE!�B`< _�pl��:���d��E~ho~gX��;�-ኽ�xM����G}��jZ�i3��>yQ~z\.��:�.+
E]/�VVݷ���BVΨ?@�U�$D���8�D���,Y�����������
�ld�y�GRޱ�(_�Gb9     