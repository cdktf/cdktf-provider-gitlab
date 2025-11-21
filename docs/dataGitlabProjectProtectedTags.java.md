# `dataGitlabProjectProtectedTags` Submodule <a name="`dataGitlabProjectProtectedTags` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectProtectedTags <a name="DataGitlabProjectProtectedTags" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_protected_tags gitlab_project_protected_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTags;

DataGitlabProjectProtectedTags.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The integer or path with namespace that uniquely identifies the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_protected_tags#project DataGitlabProjectProtectedTags#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectProtectedTags resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTags;

DataGitlabProjectProtectedTags.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTags;

DataGitlabProjectProtectedTags.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTags;

DataGitlabProjectProtectedTags.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTags;

DataGitlabProjectProtectedTags.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabProjectProtectedTags.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabProjectProtectedTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabProjectProtectedTags to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabProjectProtectedTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_protected_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectProtectedTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.protectedTags">protectedTags</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList">DataGitlabProjectProtectedTagsProtectedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `protectedTags`<sup>Required</sup> <a name="protectedTags" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.protectedTags"></a>

```java
public DataGitlabProjectProtectedTagsProtectedTagsList getProtectedTags();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList">DataGitlabProjectProtectedTagsProtectedTagsList</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectProtectedTagsConfig <a name="DataGitlabProjectProtectedTagsConfig" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTagsConfig;

DataGitlabProjectProtectedTagsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.project">project</a></code> | <code>java.lang.String</code> | The integer or path with namespace that uniquely identifies the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_protected_tags#project DataGitlabProjectProtectedTags#project}

---

### DataGitlabProjectProtectedTagsProtectedTags <a name="DataGitlabProjectProtectedTagsProtectedTags" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTagsProtectedTags;

DataGitlabProjectProtectedTagsProtectedTags.builder()
    .build();
```


### DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels <a name="DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels;

DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.builder()
//  .groupId(java.lang.Number)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab group allowed to perform the relevant action. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of a GitLab user allowed to perform the relevant action. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of a GitLab group allowed to perform the relevant action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_protected_tags#group_id DataGitlabProjectProtectedTags#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of a GitLab user allowed to perform the relevant action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_protected_tags#user_id DataGitlabProjectProtectedTags#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList <a name="DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList;

new DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.get"></a>

```java
public DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels</a>>

---


### DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference <a name="DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference;

new DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.accessLevelDescription"></a>

```java
public java.lang.String getAccessLevelDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels</a>

---


### DataGitlabProjectProtectedTagsProtectedTagsList <a name="DataGitlabProjectProtectedTagsProtectedTagsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTagsProtectedTagsList;

new DataGitlabProjectProtectedTagsProtectedTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.get"></a>

```java
public DataGitlabProjectProtectedTagsProtectedTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectProtectedTagsProtectedTagsOutputReference <a name="DataGitlabProjectProtectedTagsProtectedTagsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_protected_tags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference;

new DataGitlabProjectProtectedTagsProtectedTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.createAccessLevels">createAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags">DataGitlabProjectProtectedTagsProtectedTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createAccessLevels`<sup>Required</sup> <a name="createAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.createAccessLevels"></a>

```java
public DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList getCreateAccessLevels();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectProtectedTagsProtectedTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags">DataGitlabProjectProtectedTagsProtectedTags</a>

---



