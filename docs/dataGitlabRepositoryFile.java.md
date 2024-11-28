# `dataGitlabRepositoryFile` Submodule <a name="`dataGitlabRepositoryFile` Submodule" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabRepositoryFile <a name="DataGitlabRepositoryFile" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file gitlab_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_file.DataGitlabRepositoryFile;

DataGitlabRepositoryFile.Builder.create(Construct scope, java.lang.String id)
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
    .filePath(java.lang.String)
    .project(java.lang.String)
    .ref(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.filePath">filePath</a></code> | <code>java.lang.String</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.ref">ref</a></code> | <code>java.lang.String</code> | The name of branch, tag or commit. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#id DataGitlabRepositoryFile#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.filePath"></a>

- *Type:* java.lang.String

The full path of the file.

It must be relative to the root of the project without a leading slash `/` or `./`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#file_path DataGitlabRepositoryFile#file_path}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#project DataGitlabRepositoryFile#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.ref"></a>

- *Type:* java.lang.String

The name of branch, tag or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#ref DataGitlabRepositoryFile#ref}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#id DataGitlabRepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabRepositoryFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_file.DataGitlabRepositoryFile;

DataGitlabRepositoryFile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_file.DataGitlabRepositoryFile;

DataGitlabRepositoryFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_file.DataGitlabRepositoryFile;

DataGitlabRepositoryFile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_file.DataGitlabRepositoryFile;

DataGitlabRepositoryFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabRepositoryFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabRepositoryFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabRepositoryFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabRepositoryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabRepositoryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.blobId">blobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.commitId">commitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.contentSha256">contentSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.executeFilemode">executeFilemode</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.lastCommitId">lastCommitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.filePathInput">filePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `blobId`<sup>Required</sup> <a name="blobId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.blobId"></a>

```java
public java.lang.String getBlobId();
```

- *Type:* java.lang.String

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.commitId"></a>

```java
public java.lang.String getCommitId();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.contentSha256"></a>

```java
public java.lang.String getContentSha256();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `executeFilemode`<sup>Required</sup> <a name="executeFilemode" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.executeFilemode"></a>

```java
public IResolvable getExecuteFilemode();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `lastCommitId`<sup>Required</sup> <a name="lastCommitId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.lastCommitId"></a>

```java
public java.lang.String getLastCommitId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.filePathInput"></a>

```java
public java.lang.String getFilePathInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabRepositoryFileConfig <a name="DataGitlabRepositoryFileConfig" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_file.DataGitlabRepositoryFileConfig;

DataGitlabRepositoryFileConfig.builder()
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
    .filePath(java.lang.String)
    .project(java.lang.String)
    .ref(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.filePath">filePath</a></code> | <code>java.lang.String</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.project">project</a></code> | <code>java.lang.String</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.ref">ref</a></code> | <code>java.lang.String</code> | The name of branch, tag or commit. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#id DataGitlabRepositoryFile#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

The full path of the file.

It must be relative to the root of the project without a leading slash `/` or `./`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#file_path DataGitlabRepositoryFile#file_path}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#project DataGitlabRepositoryFile#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

The name of branch, tag or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#ref DataGitlabRepositoryFile#ref}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_file#id DataGitlabRepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



