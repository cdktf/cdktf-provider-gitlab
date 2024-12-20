# `dataGitlabRepositoryTree` Submodule <a name="`dataGitlabRepositoryTree` Submodule" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabRepositoryTree <a name="DataGitlabRepositoryTree" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree gitlab_repository_tree}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTree;

DataGitlabRepositoryTree.Builder.create(Construct scope, java.lang.String id)
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
    .project(java.lang.String)
    .ref(java.lang.String)
//  .id(java.lang.String)
//  .path(java.lang.String)
//  .recursive(java.lang.Boolean)
//  .recursive(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.ref">ref</a></code> | <code>java.lang.String</code> | The name of a repository branch or tag. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#id DataGitlabRepositoryTree#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The path inside repository. Used to get content of subdirectories. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.recursive">recursive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean value used to get a recursive tree (false by default). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or full path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#project DataGitlabRepositoryTree#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.ref"></a>

- *Type:* java.lang.String

The name of a repository branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#ref DataGitlabRepositoryTree#ref}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#id DataGitlabRepositoryTree#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The path inside repository. Used to get content of subdirectories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#path DataGitlabRepositoryTree#path}

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.recursive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean value used to get a recursive tree (false by default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#recursive DataGitlabRepositoryTree#recursive}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetRecursive">resetRecursive</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetId"></a>

```java
public void resetId()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetPath"></a>

```java
public void resetPath()
```

##### `resetRecursive` <a name="resetRecursive" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetRecursive"></a>

```java
public void resetRecursive()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabRepositoryTree resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTree;

DataGitlabRepositoryTree.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTree;

DataGitlabRepositoryTree.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTree;

DataGitlabRepositoryTree.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTree;

DataGitlabRepositoryTree.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabRepositoryTree.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabRepositoryTree resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabRepositoryTree to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabRepositoryTree that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabRepositoryTree to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.tree">tree</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList">DataGitlabRepositoryTreeTreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.recursiveInput">recursiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.recursive">recursive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `tree`<sup>Required</sup> <a name="tree" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.tree"></a>

```java
public DataGitlabRepositoryTreeTreeList getTree();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList">DataGitlabRepositoryTreeTreeList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `recursiveInput`<sup>Optional</sup> <a name="recursiveInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.recursiveInput"></a>

```java
public java.lang.Object getRecursiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.recursive"></a>

```java
public java.lang.Object getRecursive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabRepositoryTreeConfig <a name="DataGitlabRepositoryTreeConfig" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTreeConfig;

DataGitlabRepositoryTreeConfig.builder()
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
    .project(java.lang.String)
    .ref(java.lang.String)
//  .id(java.lang.String)
//  .path(java.lang.String)
//  .recursive(java.lang.Boolean)
//  .recursive(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.ref">ref</a></code> | <code>java.lang.String</code> | The name of a repository branch or tag. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#id DataGitlabRepositoryTree#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.path">path</a></code> | <code>java.lang.String</code> | The path inside repository. Used to get content of subdirectories. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.recursive">recursive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean value used to get a recursive tree (false by default). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or full path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#project DataGitlabRepositoryTree#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

The name of a repository branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#ref DataGitlabRepositoryTree#ref}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#id DataGitlabRepositoryTree#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path inside repository. Used to get content of subdirectories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#path DataGitlabRepositoryTree#path}

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.recursive"></a>

```java
public java.lang.Object getRecursive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean value used to get a recursive tree (false by default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/repository_tree#recursive DataGitlabRepositoryTree#recursive}

---

### DataGitlabRepositoryTreeTree <a name="DataGitlabRepositoryTreeTree" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTree.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTreeTree;

DataGitlabRepositoryTreeTree.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabRepositoryTreeTreeList <a name="DataGitlabRepositoryTreeTreeList" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTreeTreeList;

new DataGitlabRepositoryTreeTreeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.get"></a>

```java
public DataGitlabRepositoryTreeTreeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabRepositoryTreeTreeOutputReference <a name="DataGitlabRepositoryTreeTreeOutputReference" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_repository_tree.DataGitlabRepositoryTreeTreeOutputReference;

new DataGitlabRepositoryTreeTreeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTree">DataGitlabRepositoryTreeTree</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.internalValue"></a>

```java
public DataGitlabRepositoryTreeTree getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTree">DataGitlabRepositoryTreeTree</a>

---



