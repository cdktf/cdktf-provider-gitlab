# `dataGitlabArtifactFile` Submodule <a name="`dataGitlabArtifactFile` Submodule" id="@cdktf/provider-gitlab.dataGitlabArtifactFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabArtifactFile <a name="DataGitlabArtifactFile" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file gitlab_artifact_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_artifact_file.DataGitlabArtifactFile;

DataGitlabArtifactFile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactPath(java.lang.String)
    .job(java.lang.String)
    .project(java.lang.String)
    .ref(java.lang.String)
//  .maxSizeBytes(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | Path to the artifact file within the job's artifacts archive. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.job">job</a></code> | <code>java.lang.String</code> | The name of the job. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.ref">ref</a></code> | <code>java.lang.String</code> | The name of the branch, tag, or commit SHA. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.Number</code> | Maximum bytes to read from the artifact. Defaults to 10MB (10485760 bytes). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.artifactPath"></a>

- *Type:* java.lang.String

Path to the artifact file within the job's artifacts archive.

This path is relative to the archive contents (not the local filesystem). Ensure each `gitlab_artifact_file` data source in your configuration uses a unique artifact_path to avoid ambiguity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#artifact_path DataGitlabArtifactFile#artifact_path}

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.job"></a>

- *Type:* java.lang.String

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#job DataGitlabArtifactFile#job}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#project DataGitlabArtifactFile#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.ref"></a>

- *Type:* java.lang.String

The name of the branch, tag, or commit SHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#ref DataGitlabArtifactFile#ref}

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.maxSizeBytes"></a>

- *Type:* java.lang.Number

Maximum bytes to read from the artifact. Defaults to 10MB (10485760 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#max_size_bytes DataGitlabArtifactFile#max_size_bytes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.resetMaxSizeBytes">resetMaxSizeBytes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxSizeBytes` <a name="resetMaxSizeBytes" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.resetMaxSizeBytes"></a>

```java
public void resetMaxSizeBytes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabArtifactFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_artifact_file.DataGitlabArtifactFile;

DataGitlabArtifactFile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_artifact_file.DataGitlabArtifactFile;

DataGitlabArtifactFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_artifact_file.DataGitlabArtifactFile;

DataGitlabArtifactFile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_artifact_file.DataGitlabArtifactFile;

DataGitlabArtifactFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabArtifactFile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabArtifactFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabArtifactFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabArtifactFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabArtifactFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.artifactPathInput">artifactPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.jobInput">jobInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.maxSizeBytesInput">maxSizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.job">job</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `artifactPathInput`<sup>Optional</sup> <a name="artifactPathInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.artifactPathInput"></a>

```java
public java.lang.String getArtifactPathInput();
```

- *Type:* java.lang.String

---

##### `jobInput`<sup>Optional</sup> <a name="jobInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.jobInput"></a>

```java
public java.lang.String getJobInput();
```

- *Type:* java.lang.String

---

##### `maxSizeBytesInput`<sup>Optional</sup> <a name="maxSizeBytesInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.maxSizeBytesInput"></a>

```java
public java.lang.Number getMaxSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.job"></a>

```java
public java.lang.String getJob();
```

- *Type:* java.lang.String

---

##### `maxSizeBytes`<sup>Required</sup> <a name="maxSizeBytes" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.maxSizeBytes"></a>

```java
public java.lang.Number getMaxSizeBytes();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabArtifactFileConfig <a name="DataGitlabArtifactFileConfig" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_artifact_file.DataGitlabArtifactFileConfig;

DataGitlabArtifactFileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactPath(java.lang.String)
    .job(java.lang.String)
    .project(java.lang.String)
    .ref(java.lang.String)
//  .maxSizeBytes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.artifactPath">artifactPath</a></code> | <code>java.lang.String</code> | Path to the artifact file within the job's artifacts archive. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.job">job</a></code> | <code>java.lang.String</code> | The name of the job. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.ref">ref</a></code> | <code>java.lang.String</code> | The name of the branch, tag, or commit SHA. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.Number</code> | Maximum bytes to read from the artifact. Defaults to 10MB (10485760 bytes). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.artifactPath"></a>

```java
public java.lang.String getArtifactPath();
```

- *Type:* java.lang.String

Path to the artifact file within the job's artifacts archive.

This path is relative to the archive contents (not the local filesystem). Ensure each `gitlab_artifact_file` data source in your configuration uses a unique artifact_path to avoid ambiguity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#artifact_path DataGitlabArtifactFile#artifact_path}

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.job"></a>

```java
public java.lang.String getJob();
```

- *Type:* java.lang.String

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#job DataGitlabArtifactFile#job}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#project DataGitlabArtifactFile#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

The name of the branch, tag, or commit SHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#ref DataGitlabArtifactFile#ref}

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.maxSizeBytes"></a>

```java
public java.lang.Number getMaxSizeBytes();
```

- *Type:* java.lang.Number

Maximum bytes to read from the artifact. Defaults to 10MB (10485760 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#max_size_bytes DataGitlabArtifactFile#max_size_bytes}

---



