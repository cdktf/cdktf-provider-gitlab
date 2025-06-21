# `dataGitlabInstanceDeployKeys` Submodule <a name="`dataGitlabInstanceDeployKeys` Submodule" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabInstanceDeployKeys <a name="DataGitlabInstanceDeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/instance_deploy_keys gitlab_instance_deploy_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeys;

DataGitlabInstanceDeployKeys.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .public(java.lang.Boolean)
//  .public(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.public">public</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only return deploy keys that are public. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.public"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only return deploy keys that are public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/instance_deploy_keys#public DataGitlabInstanceDeployKeys#public}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetPublic">resetPublic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetId"></a>

```java
public void resetId()
```

##### `resetPublic` <a name="resetPublic" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetPublic"></a>

```java
public void resetPublic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabInstanceDeployKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeys;

DataGitlabInstanceDeployKeys.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeys;

DataGitlabInstanceDeployKeys.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeys;

DataGitlabInstanceDeployKeys.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeys;

DataGitlabInstanceDeployKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabInstanceDeployKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabInstanceDeployKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabInstanceDeployKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabInstanceDeployKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/instance_deploy_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabInstanceDeployKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.deployKeys">deployKeys</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList">DataGitlabInstanceDeployKeysDeployKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.publicInput">publicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.public">public</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `deployKeys`<sup>Required</sup> <a name="deployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.deployKeys"></a>

```java
public DataGitlabInstanceDeployKeysDeployKeysList getDeployKeys();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList">DataGitlabInstanceDeployKeysDeployKeysList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `publicInput`<sup>Optional</sup> <a name="publicInput" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.publicInput"></a>

```java
public java.lang.Object getPublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.public"></a>

```java
public java.lang.Object getPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabInstanceDeployKeysConfig <a name="DataGitlabInstanceDeployKeysConfig" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeysConfig;

DataGitlabInstanceDeployKeysConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .public(java.lang.Boolean)
//  .public(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.public">public</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only return deploy keys that are public. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.public"></a>

```java
public java.lang.Object getPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only return deploy keys that are public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/instance_deploy_keys#public DataGitlabInstanceDeployKeys#public}

---

### DataGitlabInstanceDeployKeysDeployKeys <a name="DataGitlabInstanceDeployKeysDeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeysDeployKeys;

DataGitlabInstanceDeployKeysDeployKeys.builder()
    .build();
```


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess;

DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabInstanceDeployKeysDeployKeysList <a name="DataGitlabInstanceDeployKeysDeployKeysList" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeysDeployKeysList;

new DataGitlabInstanceDeployKeysDeployKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get"></a>

```java
public DataGitlabInstanceDeployKeysDeployKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabInstanceDeployKeysDeployKeysOutputReference <a name="DataGitlabInstanceDeployKeysDeployKeysOutputReference" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeysDeployKeysOutputReference;

new DataGitlabInstanceDeployKeysDeployKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.projectsWithWriteAccess">projectsWithWriteAccess</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys">DataGitlabInstanceDeployKeysDeployKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `projectsWithWriteAccess`<sup>Required</sup> <a name="projectsWithWriteAccess" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.projectsWithWriteAccess"></a>

```java
public DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList getProjectsWithWriteAccess();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.internalValue"></a>

```java
public DataGitlabInstanceDeployKeysDeployKeys getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys">DataGitlabInstanceDeployKeysDeployKeys</a>

---


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList;

new DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get"></a>

```java
public DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_instance_deploy_keys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference;

new DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.nameWithNamespace">nameWithNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.pathWithNamespace">pathWithNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameWithNamespace`<sup>Required</sup> <a name="nameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.nameWithNamespace"></a>

```java
public java.lang.String getNameWithNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.pathWithNamespace"></a>

```java
public java.lang.String getPathWithNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.internalValue"></a>

```java
public DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess</a>

---



