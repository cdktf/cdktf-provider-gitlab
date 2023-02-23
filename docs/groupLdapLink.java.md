# `groupLdapLink` Submodule <a name="`groupLdapLink` Submodule" id="@cdktf/provider-gitlab.groupLdapLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupLdapLink <a name="GroupLdapLink" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link gitlab_group_ldap_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_ldap_link.GroupLdapLink;

GroupLdapLink.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cn(java.lang.String)
    .groupId(java.lang.String)
    .ldapProvider(java.lang.String)
//  .accessLevel(java.lang.String)
//  .force(java.lang.Boolean)
//  .force(IResolvable)
//  .groupAccess(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.cn">cn</a></code> | <code>java.lang.String</code> | The CN of the LDAP group to link with. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | The id of the GitLab group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.ldapProvider">ldapProvider</a></code> | <code>java.lang.String</code> | The name of the LDAP provider as stored in the GitLab database. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then delete and replace an existing LDAP link if one exists. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.groupAccess">groupAccess</a></code> | <code>java.lang.String</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#id GroupLdapLink#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.cn"></a>

- *Type:* java.lang.String

The CN of the LDAP group to link with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#cn GroupLdapLink#cn}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

The id of the GitLab group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#group_id GroupLdapLink#group_id}

---

##### `ldapProvider`<sup>Required</sup> <a name="ldapProvider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.ldapProvider"></a>

- *Type:* java.lang.String

The name of the LDAP provider as stored in the GitLab database.

Note that this is NOT the value of the `label` attribute as shown in the web UI. In most cases this will be `ldapmain` but you may use the [LDAP check rake task](https://docs.gitlab.com/ee/administration/raketasks/ldap.html#check) for receiving the LDAP server name: `LDAP: ... Server: ldapmain`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#ldap_provider GroupLdapLink#ldap_provider}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#access_level GroupLdapLink#access_level}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.force"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then delete and replace an existing LDAP link if one exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#force GroupLdapLink#force}

---

##### `groupAccess`<sup>Optional</sup> <a name="groupAccess" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.groupAccess"></a>

- *Type:* java.lang.String

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#group_access GroupLdapLink#group_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#id GroupLdapLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetGroupAccess">resetGroupAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetForce"></a>

```java
public void resetForce()
```

##### `resetGroupAccess` <a name="resetGroupAccess" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetGroupAccess"></a>

```java
public void resetGroupAccess()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_ldap_link.GroupLdapLink;

GroupLdapLink.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_ldap_link.GroupLdapLink;

GroupLdapLink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_ldap_link.GroupLdapLink;

GroupLdapLink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cnInput">cnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forceInput">forceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccessInput">groupAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProviderInput">ldapProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cn">cn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccess">groupAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProvider">ldapProvider</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `cnInput`<sup>Optional</sup> <a name="cnInput" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cnInput"></a>

```java
public java.lang.String getCnInput();
```

- *Type:* java.lang.String

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.forceInput"></a>

```java
public java.lang.Object getForceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupAccessInput`<sup>Optional</sup> <a name="groupAccessInput" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccessInput"></a>

```java
public java.lang.String getGroupAccessInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ldapProviderInput`<sup>Optional</sup> <a name="ldapProviderInput" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProviderInput"></a>

```java
public java.lang.String getLdapProviderInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.cn"></a>

```java
public java.lang.String getCn();
```

- *Type:* java.lang.String

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.force"></a>

```java
public java.lang.Object getForce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupAccess`<sup>Required</sup> <a name="groupAccess" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupAccess"></a>

```java
public java.lang.String getGroupAccess();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ldapProvider`<sup>Required</sup> <a name="ldapProvider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.ldapProvider"></a>

```java
public java.lang.String getLdapProvider();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroupLdapLinkConfig <a name="GroupLdapLinkConfig" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_ldap_link.GroupLdapLinkConfig;

GroupLdapLinkConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cn(java.lang.String)
    .groupId(java.lang.String)
    .ldapProvider(java.lang.String)
//  .accessLevel(java.lang.String)
//  .force(java.lang.Boolean)
//  .force(IResolvable)
//  .groupAccess(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.cn">cn</a></code> | <code>java.lang.String</code> | The CN of the LDAP group to link with. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | The id of the GitLab group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.ldapProvider">ldapProvider</a></code> | <code>java.lang.String</code> | The name of the LDAP provider as stored in the GitLab database. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.force">force</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then delete and replace an existing LDAP link if one exists. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.groupAccess">groupAccess</a></code> | <code>java.lang.String</code> | Minimum access level for members of the LDAP group. |
| <code><a href="#@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#id GroupLdapLink#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.cn"></a>

```java
public java.lang.String getCn();
```

- *Type:* java.lang.String

The CN of the LDAP group to link with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#cn GroupLdapLink#cn}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

The id of the GitLab group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#group_id GroupLdapLink#group_id}

---

##### `ldapProvider`<sup>Required</sup> <a name="ldapProvider" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.ldapProvider"></a>

```java
public java.lang.String getLdapProvider();
```

- *Type:* java.lang.String

The name of the LDAP provider as stored in the GitLab database.

Note that this is NOT the value of the `label` attribute as shown in the web UI. In most cases this will be `ldapmain` but you may use the [LDAP check rake task](https://docs.gitlab.com/ee/administration/raketasks/ldap.html#check) for receiving the LDAP server name: `LDAP: ... Server: ldapmain`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#ldap_provider GroupLdapLink#ldap_provider}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#access_level GroupLdapLink#access_level}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.force"></a>

```java
public java.lang.Object getForce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then delete and replace an existing LDAP link if one exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#force GroupLdapLink#force}

---

##### `groupAccess`<sup>Optional</sup> <a name="groupAccess" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.groupAccess"></a>

```java
public java.lang.String getGroupAccess();
```

- *Type:* java.lang.String

Minimum access level for members of the LDAP group.

Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#group_access GroupLdapLink#group_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupLdapLink.GroupLdapLinkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#id GroupLdapLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


