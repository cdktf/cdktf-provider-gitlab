# `dataGitlabGroupVariable` Submodule <a name="`dataGitlabGroupVariable` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupVariable <a name="DataGitlabGroupVariable" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable gitlab_group_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_variable.DataGitlabGroupVariable;

DataGitlabGroupVariable.Builder.create(Construct scope, java.lang.String id)
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
    .group(java.lang.String)
    .key(java.lang.String)
//  .environmentScope(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | The name or id of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.environmentScope">environmentScope</a></code> | <code>java.lang.String</code> | The environment scope of the variable. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#id DataGitlabGroupVariable#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.group"></a>

- *Type:* java.lang.String

The name or id of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#group DataGitlabGroupVariable#group}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#key DataGitlabGroupVariable#key}

---

##### `environmentScope`<sup>Optional</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.environmentScope"></a>

- *Type:* java.lang.String

The environment scope of the variable.

Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#environment_scope DataGitlabGroupVariable#environment_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#id DataGitlabGroupVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.resetEnvironmentScope">resetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnvironmentScope` <a name="resetEnvironmentScope" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.resetEnvironmentScope"></a>

```java
public void resetEnvironmentScope()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_variable.DataGitlabGroupVariable;

DataGitlabGroupVariable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_variable.DataGitlabGroupVariable;

DataGitlabGroupVariable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_variable.DataGitlabGroupVariable;

DataGitlabGroupVariable.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.masked">masked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.protected">protected</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.environmentScopeInput">environmentScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.environmentScope">environmentScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `masked`<sup>Required</sup> <a name="masked" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.masked"></a>

```java
public IResolvable getMasked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.protected"></a>

```java
public IResolvable getProtected();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `environmentScopeInput`<sup>Optional</sup> <a name="environmentScopeInput" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.environmentScopeInput"></a>

```java
public java.lang.String getEnvironmentScopeInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `environmentScope`<sup>Required</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.environmentScope"></a>

```java
public java.lang.String getEnvironmentScope();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupVariableConfig <a name="DataGitlabGroupVariableConfig" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_group_variable.DataGitlabGroupVariableConfig;

DataGitlabGroupVariableConfig.builder()
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
    .group(java.lang.String)
    .key(java.lang.String)
//  .environmentScope(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.group">group</a></code> | <code>java.lang.String</code> | The name or id of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.key">key</a></code> | <code>java.lang.String</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.environmentScope">environmentScope</a></code> | <code>java.lang.String</code> | The environment scope of the variable. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#id DataGitlabGroupVariable#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The name or id of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#group DataGitlabGroupVariable#group}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#key DataGitlabGroupVariable#key}

---

##### `environmentScope`<sup>Optional</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.environmentScope"></a>

```java
public java.lang.String getEnvironmentScope();
```

- *Type:* java.lang.String

The environment scope of the variable.

Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#environment_scope DataGitlabGroupVariable#environment_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupVariable.DataGitlabGroupVariableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_variable#id DataGitlabGroupVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


